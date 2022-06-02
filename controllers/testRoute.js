const router = require ('express').Router();
const { User, Team, UserTeam } = require('../models');

router.get('/teams', async (req, res)=>{
    try{
        const allTeams = await Team.findAll({
            include: [User]
        });
        res.status(200).json(allTeams);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;