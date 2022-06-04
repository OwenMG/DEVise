const router = require('express').Router();

//will need to display log in or sign in options
router.get('/', async (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});




