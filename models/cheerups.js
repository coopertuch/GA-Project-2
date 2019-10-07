const mongoose = require("../db/connection")

const cheerupSchema = new mongoose.Schema({
    quote: {
      type: String, 
      maxlength: 100
    },
    author: {
      type: String,
      maxlength: 20
    }
  });


const cheerupModel = mongoose.model("cheerupModel", cheerupSchema)

module.exports = cheerupModel