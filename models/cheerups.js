const mongoose = require("../db/connection");

const cheerupSchema = new mongoose.Schema({
  quote: {
    type: String,
    maxlength: 100
  },
  author: {
    type: String,
    maxlength: 20
  },
  likes: {
    type: Number,
    default: 0
  }
});

const cheerupModel = mongoose.model("cheerupModel", cheerupSchema);

module.exports = cheerupModel;
