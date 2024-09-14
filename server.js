const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const drawingRoutes = require('./routes/drawingRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
app.use('/api', drawingRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  try {
    res.json(`Server Running on PORT ${PORT}`);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
