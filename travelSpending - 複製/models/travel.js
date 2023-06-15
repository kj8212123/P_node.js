var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TravelList = new Schema({
  travel_name:{ type: String},
  start_date: { type: String,},
  end_date: { type: String},
  cover_img: { type: String, required: true },
  country:{type: Schema.Types.ObjectId, ref: 'Country'}
});


// var Travel = mongoose.model("Travel", TravelList);

// Virtual for author's full name
TravelList.virtual("coverImg").get(function () {
  return "/cover/" + this.cover_img + ".jpg";
});



// // Virtual for author's URL
// AuthorSchema.virtual("url").get(function () {
//   return "/catalog/author/" + this._id;
// });

//Export model
module.exports = mongoose.model("Travel", TravelList);