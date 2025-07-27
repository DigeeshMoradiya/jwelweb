const express = require('express');
const cors = require('cors'); // 👈 Import CORS
const app = express();
const routes = require('./routes');
const { sequelize } = require('./models');
const path = require('path'); // Import path module

require('dotenv').config();

// ✅ Add CORS middleware BEFORE defining routes
app.use(cors({
  origin: 'http://localhost:4010', // Allow requests from this origin
  credentials: true // Set to true if you're sending cookies/auth headers
}));

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

if (process.env.DB_SYNC === 'true') {
  sequelize.sync({ alter: true })
    .then(() => {
      console.log('Database synchronized');
    })
    .catch((error) => {
      console.error('Database synchronization failed:', error.message);
    });
}
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
