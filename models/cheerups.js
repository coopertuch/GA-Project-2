const mongoose = require("../db/connection")

const cheerupSchema = new mongoose.Schema({
    quote: String,
    author: String
  })

const cheerupModel = mongoose.model("cheerupModel", cheerupSchema)

module.exports = cheerupModel