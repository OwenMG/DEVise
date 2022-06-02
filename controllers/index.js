const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

router.use('/home', homeRoutes);

module.exports = router;


