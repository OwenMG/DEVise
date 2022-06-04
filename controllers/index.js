const router = require('express').Router();
const testRoute = require('./testRoute')
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/test', testRoute);

module.exports = router;


