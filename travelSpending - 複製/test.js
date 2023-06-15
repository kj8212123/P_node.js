const mongoose = require('mongoose');
const dbURL= 'mongodb+srv://aaaa1111:aaaa1111@nodetest.wsj9pmc.mongodb.net/travelSpending?retryWrites=true&w=majority';
const Country = require('./models/country');
const Budget = require('./models/budget');
const Spend = require('./models/spend');
const Travel = require('./models/travel');
const SpendingType = require('./models/spendingType');


//連上連上MongoDB
mongoose.connect(dbURL);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));



//Travel
var travels = [
  {travel_name:"333", start_date:'2023/6/13', end_date:'2023/7/10', cover_img:'house', country:'6486e7a18a079f793e8ad358'},
  {travel_name:"444", start_date:'2023/12/1', end_date:'2024/2/10', cover_img:'lake', country:'6486e7a18a079f793e8ad357'}
]
// Travel.insertMany(travels).then(()=>{
//     console.log("insert succse!")
// }).catch((err)=>{
//     console.log(err)
// })

// Travel.find()
// .exec()
// .then((q)=>{
//     console.log(q)
// }).catch((err)=>{
//     console.log(err)
// })

//Country
var countries = 
  [
    {name:'South-Korea',value:'south-korea', currency:'KRW', dollar_sign:'₩'},
    {name:'Japan',value:'japan', currency:'JPY', dollar_sign:'¥'},
    {name:'UK',value:'united-kingdom', currency:'GBP', dollar_sign:'£'},
    {name:'United State',value:'united-states', currency:'USD', dollar_sign:'$'},
    {name:'China',value:'china', currency:'CNY', dollar_sign:'¥'},
    {name:'Singapore',value:'singapore', currency:'SGD', dollar_sign:'$'},
    {name:'Hong Kong',value:'hong-kong', currency:'HKD', dollar_sign:'$'},
    {name:'Thailand',value:'thailand', currency:'THB', dollar_sign:'฿'}
  ]

// Country.insertMany(countries).then(()=>{
//     console.log("insert succse!")
// }).catch((err)=>{
//     console.log(err)
// })

//SpendingType
var spendingType = [
  {name:'drink', icon:'soda'},
  {name:'food', icon:'dish'},
  {name:'snack', icon:'crisps'},
  {name:'toy', icon:'toys'},
  {name:'cloth', icon:'hoodie'},
  {name:'transfer', icon:'train-station'},
  {name:'hotel', icon:'bed'}
]

// SpendingType.insertMany(spendingType).then(()=>{
//     console.log("insert succse!")
// }).catch((err)=>{
//     console.log(err)
// })

// SpendingType.find()
// .exec()
// .then((q)=>{
//   q.forEach((a) => {
//     console.log(`${a.name}: ${a.icon}`);
//     })
// }).catch((err)=>{
//   console.log(err)
// })
// const options = {year: "numeric",month: "long",day: "numeric",};
// const today = new Date();
// console.log(today);
// console.log(today.getDate());
// console.log(today.getFullYear()+" / "+ (today.getMonth()+1) +" / "+ today.getDate());
// var date = '2023/06/18';
// var past = '2023/02/14';
// console.log(new Date(date).toLocaleDateString('ko-KR'))
// console.log(today>new Date(date))
// console.log(today>new Date(past))

Travel.find()
    .exec()
    .then((q) => {

      const today = new Date();
      console.log(today);
      q.forEach((a) => {
        console.log("--------foreach-----------")
        if (tellTravel(a.start_date,a.end_date)<0){
          past.push(a)
        }else if (tellTravel(a.start_date,a.end_date)>0){
          future.push(a)
        }else{
          now.push(a);
        }
      })  
      console.log('now:'+now)
      console.log('past :'+past)
      console.log('future:'+future)
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