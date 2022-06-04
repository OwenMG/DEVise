const router = require('express').Router();
const {Team, User, UserTeam} = require('../../models');
const Authenticated = require('../../utils/auth');

router.get('/', Authenticated, async (req, res) => {
    try {
        const userTeamData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password', 'first_name', 'last_name', 'email']},
            include:[{model:Team, attributes: {exclude: ['password','user_team']}}],
            // include: {model: Team, through: UserTeam, as: 'users-teams' },
        });
        if(!userTeamData) {
            res
                .status(404)
                .json({ message: 'No Teams Found. Create a new team or enter Team password to join a team' });
                return;
        }

        res.status(200).json(userTeamData);
        } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;