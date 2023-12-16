const express = require('express');
const router = express.Router();
// import our controller functions
const flightsCtrl = require('../controllers/flights')
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//GET/ flights/new
router.get('/new', flightsCtrl.new)

//POST/ movies/creat

module.exports = router;
