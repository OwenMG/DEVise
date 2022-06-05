const router = require('express').Router();
const {Team, User, UserTeam} = require('../../models');
const Authenticated = require('../../utils/auth');
const bcrypt = require('bcrypt');

router.get('/', Authenticated, async (req, res) => {
    try {
        const userTeamData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password', 'first_name', 'last_name', 'email']},
            include:[{model:Team, attributes: {exclude: ['password']}}],
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

router.post('/', Authenticated, async (req, res) => {
    try {
        const newTeam = await Team.create(req.body);

        req.session.save(() => {
            req.session.team_id = newTeam.id;

            res.status(200).json({team: newTeam, message: 'Your team has been created!'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/jointeam', Authenticated, async (req, res) => {
    try {
        const teamData = Team.findOne({where: {name: req.body.name}});
        const currentUser = User.findByPk(req.session.user_id);

        const validPass = await teamData.checkPassword(req.body.password);

        if(!validPass) {
            res.status(400).json({message: 'Incorrect team password'});
            return;
        }

        const joinedTeam = await UserTeam.create({user_id: currentUser.id, team_id:teamData.id});
        res.status(200).json({team:teamData.name, message:"You've been added to this team"});
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;