const express = require('express');
const path = require('path');
const axios = require('axios');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));
//將pug設為模板引擎
app.set('view engine', 'pug');



var futureTravels = 
    [              
        {id:1, countryName:'Philippines', date:'2023/7/7 - 2023/7/10',spend:'TWD $ 10,000'},
        {id:2, countryName:'Japan', date:'2023/8/5 - 2023/8/9',spend:'TWD $ 45,000'}
        // {id:1, countryName:'Philippines', date:'2023/7/7 - 2023/7/10'}
    ]  


app.get('/', (req, res) => {
    console.log(futureTravels);
    res.render('home', {
        futureTravels
    });
  });



const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Hacker news server started on port: ${server.address().port}`);
  });