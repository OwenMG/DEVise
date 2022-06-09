const router = require('express').Router();
const {Team, User, UserTeam} = require('../../models');
const Authenticated = require('../../utils/auth');

// router.get('/', Authenticated, async (req, res) => {
//     try {
//         const userTeamData = await User.findByPk(req.session.user_id, {
//             attributes: {exclude: ['password', 'first_name', 'last_name', 'email']},
//             include:[{model:Team, attributes: {exclude: ['password']}}],
//         });
//         if(!userTeamData) {
//             res
//                 .status(404)
//                 .json({ message: 'No Teams Found. Create a new team or enter Team password to join a team' });
//                 return;
//         }
//         const teams = userTeamData.teams
        
//         const plainTeams = teams.map((teams) => teams.get({plain:true}));
//         console.log(plainTeams[0].name);
//         res.render('joinTeam', {
//             plainTeams
//         })
//         res.status(200).json(plainTeams);

//     }
// });


router.post('/', Authenticated, async (req, res) => {
    try {
        const newTeam = await Team.create(req.body);
        const newUserTeam = await UserTeam({user_id: req.session.user_id, team_id:newTeam.id});

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
        const teamData = await Team.findOne({where: {name: req.body.name}});
        const currentUser = await User.findByPk(req.session.user_id);

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

router.get('/:id', Authenticated, async (req, res) => {
    console.log('Route works.');
    try {
        const userData = await Team.findByPk(req.params.id, {
            attributes: ['name'],
            include:[{model:User, attributes: ['first_name', 'last_name', 'email']}],
        });
        if(!userData) {
            res
                .status(404)
                .json({ message: 'No Additional Team Members. Share password to have teammates join!' });
                return;
        }
        const users = userData.users;
        
        const plainUsers = users.map((users) => users.get({plain:true}));

        console.log(plainUsers[0].name);

        res.status(200).json(plainUsers);
        } catch (err) {
            console.log('Cannot find team by pk')
        res.status(400).json(err);
    }
});

router.post('/chooseTeam', Authenticated, async (req,res) => {

    try {
        req.session.save(() => {
            req.session.team_id = req.body.team_id;

            res.status(200).json({ message: 'Your team has been selected'});
        });
    } catch (err) {
        res.status(400).json(err);
    }  
});

module.exports = router;