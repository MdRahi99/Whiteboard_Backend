const mongoose = require('mongoose');

const lineSchema = new mongoose.Schema({
  points: [[Number]],
  color: String,
  width: Number,
});

const shapeSchema = new mongoose.Schema({
  type: String,
  position: { x: Number, y: Number },
  size: { width: Number, height: Number },
  radius: Number,
  color: String,
});

const textSchema = new mongoose.Schema({
  content: String,
  position: { x: Number, y: Number },
  fontSize: Number,
  color: String,
});

const drawingSchema = new mongoose.Schema({
  title: String,
  lines: [lineSchema],
  shapes: [shapeSchema],
  texts: [textSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Drawing', drawingSchema);
