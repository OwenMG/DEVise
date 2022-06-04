const router = require('express').Router();
const {Team, User} = require('../../models');
const Authenticated = require('../../utils/auth');

router.get('/', Authenticated, async (req, res) => {
    try {
        const userTeamData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password', 'first-name', 'last-name', 'email']},
            include: [{model: Team, through: Trip, as: 'users-teams' }],
        });

        if(!userTeamData) {
            res
                .status(404)
                .json({ message: 'No Teams Found. Create a new team or enter Team password to join a team' });
                return;
        }

        const teams = userTeamData.get({plain: true});

        res.status(200).json(teams);
        } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;