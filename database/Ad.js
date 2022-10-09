const mongoose = require("mongoose");


const adSch = new mongoose.Schema({
  name: String,
  headline: String,
});

module.exports = mongoose.model("Ads", adSch);
