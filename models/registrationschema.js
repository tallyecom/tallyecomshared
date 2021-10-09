const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  serial: {
    type: Number,
    required: true,
    unique: true,
    minlength: 9,
    maxlength: 9,
    min: 700000000,
    max: 800000000,
  },
  store_name: {
    type: String,
    default: process.env.SHOP.replace(".myshopify.com", ""),
  },
  active: { type: Boolean, required: true, default: false },
  regdate: { type: Date, required: true, default: Date.now },
  email: { type: String },
});

const Registration =
  mongoose.model.Registration ||
  mongoose.model("Registration", registrationSchema);

module.exports = Registration;
