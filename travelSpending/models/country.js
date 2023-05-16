var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CountrySchema = new Schema({
  country_name: { type: String, required: true, max: 100 },
  value: { type: String, required: true, max: 100 },
  dollar_name: { type: String },
  dollar_sign: { type: String },
});

var Countries = mongoose.model("Countries", CountrySchema);

var setCountry = new Countries({
    country_name:'United State',
    value: 'US',
    dollar_name: 'USD',
    dollar_sign: '$',
})

setCountry.save(function (err) {
    if (err) return handleError(err);
    // saved!
})

// Virtual for author's full name
CountrySchema.virtual("name").get(function () {
  return this.country_name;
});



// // Virtual for author's URL
// AuthorSchema.virtual("url").get(function () {
//   return "/catalog/author/" + this._id;
// });

//Export model
module.exports = mongoose.model("Country", CountrySchema);