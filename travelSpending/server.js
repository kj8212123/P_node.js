const express = require('express');
const path = require('path');
const axios = require('axios');

const mongoose = require('mongoose');
const dbURL= 'mongodb+srv://aaaa1111:aaaa1111@nodetest.wsj9pmc.mongodb.net/travelSpending?retryWrites=true&w=majority';

const indexRouter = require("./routes/index");

// const Rolldate = require('rolldate');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
//將pug設為模板引擎
app.set('view engine', 'pug');


//連上連上MongoDB
mongoose.connect(dbURL);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use('/', indexRouter)

app.get('/', (req, res) => {
    // console.log(futureTravels);
    res.render('home', {
        futureTravels,
        pastTravels




app.post('/addConfirm',(req,res) => {
    console.log(req);
    res.render('profile', {
    });
})

app.get('/profile', (req,res) => {
    res.render('profile',{travel}
    );
})

app.get('/budget', (req,res) => {
    res.render('budget',{travel,budgetDetail}
    );
})

app.get('/expenses', (req,res) => {
    res.render('expenses',{travel}
    );
})

app.get('/report', (req, res) =>{
    res.render('report',{travel}
    );
})


const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Hacker news server started on port: ${server.address().port}`);
  });