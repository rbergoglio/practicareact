const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  foodName: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
