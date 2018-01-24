const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3030;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//mongoose.connect('mongodb://localhost:27017//v4Db');

// Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/v4db');

// On connection
mongoose.connection.on('connected', () => {
	console.log('MongoDB connected at port 27017');
});

// On connection error
mongoose.connection.on('error', (err) => {
	console.log(err);
});

var appRoutes = require('./routes/app-routes');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', appRoutes);

http.createServer(app).listen(port);
console.log('Server running on port: '+port);
