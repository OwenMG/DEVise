const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teamRoutes = require('./teamRoutes');
const milestoneRoutes = require('./milestoneRoutes');
const kanbanRoutes = require('./kanban-routes')

router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
// router.use('/milestones', milestoneRoutes);
router.use('/kanban', kanbanRoutes);

module.exports = router;