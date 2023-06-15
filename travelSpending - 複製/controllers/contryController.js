const Country = require('../models/country');
const asyncHandler = require('express-async-handler');

var futureTravels = 
    [              
        {id:1, countryName:'Philippines', date:'2023/7/7 - 2023/7/10',spend:'TWD $ 10,000'},
        {id:2, countryName:'Japan', date:'2023/8/5 - 2023/8/9',spend:'TWD $ 45,000'}
        // {id:1, countryName:'Philippines', date:'2023/7/7 - 2023/7/10'}
    ] ;

var pastTravels = 
    [              
        {id:1, countryName:'South-Korea', date:'2017/9/20 - 2017/10/8',spend:'TWD $ 20,000'},
        {id:2, countryName:'United State', date:'2017/6/27 - 2017/9/18',spend:'TWD $ 20,000'}
        // {id:1, countryName:'Philippines', date:'2023/7/7 - 2023/7/10'}
    ] ;

var countries = 
    [
        {name:'South-Korea',value:'south-korea'},
        {name:'Japan',value:'japan'},
        {name:'UK',value:'united-kingdom'},
        {name:'United State',value:'united-states'},
        {name:'China',value:'china'},
        {name:'Singapore',value:'singapore'},
        {name:'Hong Kong',value:'hong-kong'},
        {name:'Thailand',value:'thailand'}
    ]

exports.Country_list = asyncHandler(async (req, res, next) => {
    // res.send('test abc');
    res.render('add', {
        countries
    });
})

exports.Country_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
  });