const cheerupsModel = require('../models/cheerups')
const seedData = require("./seeds.json")

cheerupsModel.deleteMany({})
  .then(() => {
    return cheerupsModel.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
})

