const router = require('express').Router();

const kanbanRoutes = require('./api/kanban-routes');

router.use('api/kanban', kanbanRoutes);

module.exports = router;