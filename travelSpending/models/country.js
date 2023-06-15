var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CountrySchema = new Schema({
  name: { type: String, required: true},
  value: { type: String, required: true, unique: true},
  currency: { type: String, required: true },
  dollar_sign: { type: String, required: true }
});



// Virtual for author's full name
CountrySchema.virtual("flag").get(function () {
  return "/icon/" + this.value + ".png";
});



// // Virtual for author's URL
// AuthorSchema.virtual("url").get(function () {
//   return "/catalog/author/" + this._id;
// });

//Export model
module.exports = mongoose.model("Country", CountrySchema);