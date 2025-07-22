const express = require('express');
const app = express();
const routes = require('./routes');
const { sequelize } = require('./models');
require('dotenv').config();

app.use(express.json());
app.use('/api', routes);
   
const PORT = process.env.PORT || 3000; 

sequelize.sync({ alter: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
  