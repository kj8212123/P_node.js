var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Budget = new Schema({
  travel:{type:Schema.Types.ObjectId, ref:'Travel'},
  amunt:{type:Number, mix:0},
  cuerrency: {type: String, required: true },
  date:{type: Date, defualt: Date.now},
  type:{type: String, enum: ['Card','Cash'], required: true}
});


//Export model
module.exports = mongoose.model("Budget", Budget);