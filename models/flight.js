// import mongoose
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema({
  airport: String,
  arrival: Date,
})



const flightSchema = new Schema ({
  airline: {
    type: String,
    enum: ['American', 'Sothwest', 'United'],
    require: true,
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
   // one year from date created
  },
})
module.exports = mongoose.model('Flight', flightSchema)
