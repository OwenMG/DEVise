const router = require('express').Router();

//will need to display log in or sign in options
router.get('/', async (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/teamDash');
        return;
    }
    res.render('login');
});

router.get('/signup', async (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/teamDash');
        return;
    }
    res.render('signup');
});


module.exports = router;



