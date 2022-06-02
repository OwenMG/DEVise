const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teamRoutes = require('./teamRoutes');
const milestoneRoutes = require('./milestoneRoutes');

router.use('/users', userRoutes);
router.use('/teams', teamRoutes);

module.exports = router;