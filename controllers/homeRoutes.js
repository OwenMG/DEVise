const router = require('express').Router();
const res = require('express/lib/response');
const {User, Teams, userTeam} = require('../models');
const Authenticated = require('../utils/auth');


//will need to display log in or sign in options
router.get('/', async (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/teams', Authenticated, async (req, res) => {
    try {
        const teamData = await Teams.findAll
    }
});

//will need to get and display all info we want on the homepage when the user is logged in
router.get('/dashboard', Authenticated, async (req, res) = {
    try {
        const teamMemberData = await User.findAll({ where: {team_id} })

    }
});



