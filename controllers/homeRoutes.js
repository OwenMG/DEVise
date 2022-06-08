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

    res.render('joinTeam');
});

router.get('/teamDash', Authenticated, async (req, res) => {
    res.render('teamDash');
})


module.exports = router;



