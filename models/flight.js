// import mongoose
const mongoose = require('mongoose')
//  this is and optional shortcut to the mongoose.schema class
// this syntax is called destructuring
// const { Schema } = mongoose
// we could also use:
const Schema = mongoose.Schema

const flightSchema = new Schema({
  // define our rules for ourm odel here
  title: String,
  releaseYear: Number,
  mpaaRating: String,
  // cast is an array of string, syntax shown here.
  cast: [String],
  // add nowShowing porperty of type boolean
  nowShowing: Boolean,
}, {
  timestamps: true
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', movieSchema)

// const Flight = {
//   airline: {
//     type: String,
//     enum: ['American', 'Sothwest', 'United'],
//     require: true,
//   },
//   airport: {
//     type: String,
//     enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
//     default: 'DEN',
//   },
//   flightNo: {
//     type: Number,
//     required: true,
//     min: 10,
//     max: 9999,
//   },
//   departs: {
//     type: Date,
//     default: () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
//     one year from date created
//   },
// }
