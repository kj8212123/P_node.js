const Country = require('../models/country');
const Budget = require('../models/budget');
const Spend = require('../models/spend');
const Travel = require('../models/travel');
const SpendingType = require('../models/spendingType');
async = require('async');
const asyncHandler = require('express-async-handler');

exports.travel_list = asyncHandler(async(req, res, next) => {
  var now = [];
  var past = [];
  var future = [];

  Country.find()
  .exec()
  .then((a)=>{
    Travel.find()
    .exec()
    .then((q)=>{
      q.forEach(s=>{
        s.country = a.find(z => z._id.equals(s.country));
        if (tellTravel(s.start_date,s.end_date)<0){
          past.push(s)
        }else if (tellTravel(s.start_date,s.end_date)>0){
          future.push(s)
        }else{
          now.push(s);
        }
      })
      // console.log('now:'+now)
      // console.log('past :'+past)
      // console.log('future:'+future)
      // console.log('qqq:'+q)
      res.render('home', {
        future,
        past,
        now  
      })
    })
  })
})

function tellTravel(a,b){
  let today = new Date().getTime();
  let start = new Date(a).getTime();
  let end = new Date(b).getTime();
  console.log('today:'+today+', start:'+start+', end:'+end)
  if (today > end){
    return -1
  } else if (start > today){
    return 1
  } else {
    return 0
  }
}




exports.Country_list = asyncHandler(async (req, res, next) => {
  // res.send('test abc');
  res.render('add', {
      countries
  });
})

exports.Country_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
});