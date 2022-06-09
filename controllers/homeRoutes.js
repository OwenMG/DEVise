const router = require('express').Router();
const Authenticated = require('../utils/auth');

//will need to display log in or sign in options
router.get('/', async (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/joinTeam');
        return;
    }
    res.render('login');
});

router.get('/signup', async (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/joinTeam');
        return;
    }
    res.render('signup');
});

router.get('/joinTeam', Authenticated, async (req, res) => {
    try {
        const userTeamData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password', 'first_name', 'last_name', 'email']},
            include:[{model:Team, attributes: {exclude: ['password']}}],
        });
        if(!userTeamData) {
            res.render('joinTeam');
        }
        const teams = userTeamData.teams
        
        const plainTeams = teams.map((teams) => teams.get({plain:true}));
        res.render('joinTeam', {
            plainTeams
        });
    } catch {
        res.render('joinTeam');
    }
});

router.get('/teamDash', Authenticated, async (req, res) => {
    res.render('teamDash');
})


module.exports = router;



