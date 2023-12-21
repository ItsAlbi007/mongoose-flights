// this imports the flight model

const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports ={
  new: newFlight,
  index,
  create,
  show,
}

function newFlight(req,res) {
  res.render('flights/new', { errorMsg: ''})
}

async function index(req,res) {
  const flights = await Flight.find()
  console.log(flights)
  res.render("flights/index" , {title:"all flights" , flights})
}

async function create(req, res) {
  try {
    const flight = await Flight.create(req.body);
    res.redirect(`/flights`);
  } catch (err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}

  async function show(req,res){
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({flight: req.params.id})
    res.render('flights/show', {flight, tickets})
  }
