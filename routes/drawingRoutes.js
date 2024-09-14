const express = require('express');
const { createDrawing, getAllDrawings, getDrawingById, updateDrawing, deleteDrawing } = require('../controllers/drawingController');

const router = express.Router();

router.post('/drawings', createDrawing);
router.get('/drawings', getAllDrawings);
router.get('/drawings/:id', getDrawingById);
router.put('/drawings/:id', updateDrawing);
router.delete('/drawings/:id', deleteDrawing);

module.exports = router;
