const mongoose = require("./connection");

const cheerupsModel = require('../models/cheerups')
const seedData = require("./seeds.json")

cheerupsModel.remove({})
  .then(() => {
    return cheerupsModel.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
})

