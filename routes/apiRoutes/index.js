// required items
const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes.js');

// use noteRoutes.js
router.use(noteRoutes);

//export information
module.exports = router;