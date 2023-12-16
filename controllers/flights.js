// this imports the flight model

const Flight = require('../models/flight')

function newFlight(req,res) {
  //this controller renders a new form for movies
  res.render('flights/new', { errorMsg: ''})
}

module.exports ={
  new: newFlight,

}