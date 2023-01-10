const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

//Set port
app.set('port', process.env.PORT || 3000);
//Middlewares s
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

//Routes
app.use('/', require('./routes/user'));
//Mongodb_Atlas Conection
mongoose
  .connect(
    'mongodb+srv://Filhinho1:Filhinho1@cluster0.xs7g2xm.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(console.log('Conectado a base de datos'))
  .catch((err) => console.error(error));
//Start server
app.listen(app.get('port'), () => {
  console.log(`Server on Port ${app.get('port')}`);
});
