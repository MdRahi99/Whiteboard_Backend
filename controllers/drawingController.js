const Drawing = require('../models/drawing');

// Create a new drawing
exports.createDrawing = async (req, res) => {
  try {
    const drawing = new Drawing(req.body);
    await drawing.save();
    res.status(201).json(drawing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all drawings
exports.getAllDrawings = async (req, res) => {
  try {
    const drawings = await Drawing.find();
    res.status(200).json(drawings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific drawing
exports.getDrawingById = async (req, res) => {
  try {
    const drawing = await Drawing.findById(req.params.id);
    if (!drawing) return res.status(404).json({ message: 'Drawing not found' });
    res.status(200).json(drawing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a drawing
exports.updateDrawing = async (req, res) => {
  try {
    const drawing = await Drawing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!drawing) return res.status(404).json({ message: 'Drawing not found' });
    res.status(200).json(drawing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a drawing
exports.deleteDrawing = async (req, res) => {
  try {
    const drawing = await Drawing.findByIdAndDelete(req.params.id);
    if (!drawing) return res.status(404).json({ message: 'Drawing not found' });
    res.status(200).json({ message: 'Drawing deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
