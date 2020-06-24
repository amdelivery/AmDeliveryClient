const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const items = require('./routes/api/items.js');
//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys.js').mongoURI;

//connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use routes
app.use('/api', items);

// Serve static assets if we in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;   //устанавливаем порт из переменной среды либо 5000

app.listen(port, () => console.log(`Server started on ${port} port.`));