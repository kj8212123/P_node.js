var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Spend = new Schema({
  travel:{type:Schema.Types.ObjectId, ref:'Travel'},
  date:{type: Date},
  amount:{type:Number, mix:0},
  type:{type:Schema.Types.ObjectId, ref:'SpendingType'}
});

// var Spend = mongoose.model("Spend", Spend);

// var setCountry = new Countries(
// {
//   country_name:'Japan',
//   value: 'JP',
//   cuerrency: 'JPY',
//   dollar_sign: '¥',
//   flag:'japan.jpg'
// })



// // Virtual for author's URL
// AuthorSchema.virtual("url").get(function () {
//   return "/catalog/author/" + this._id;
// });

//Export model
module.exports = mongoose.model("Spend", Spend);