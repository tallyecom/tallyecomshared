const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  serial: Number,
  store_name: String,
  procurl: String,
  reqip: String,
  procstatus: String,
  proctype: String,
  procdate: { type: Date, default: Date.now },
});

const Detail = mongoose.model.Detail || mongoose.model("Detail", detailSchema);

module.exports = Detail;
