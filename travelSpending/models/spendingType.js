var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SpendingType = new Schema({
  name: { type: String, required: true, index: true, unique: true},
  icon: { type: String, required: true}
});

// // Virtual for author's full name
// SpendingType.virtual("name").get(function () {
//   return this.country_name;
// });


//icon url
SpendingType.virtual("iconUrl").get(function () {
  return "/icon/" + this.icon + ".png";
});


//Export model
module.exports = mongoose.model("SpendingType", SpendingType);