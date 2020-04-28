const mongoose = require("mongoose");
//let OrderItem = require("./models/orderItem.model");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  /* ver los platos y el señor del delivery */
  plates: {
    //type: [OrderItem]
    type: [String],
    required: true
  },
  deliveryman: {
    type: String,
    required: true,
    trim: true
  },
  total: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
