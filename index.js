const express = require('express')
const hbs = require('hbs')
const myController = require('./controllers/myController')
const parser = require('body-parser')
const methodOverride = require('method-override')

const app = express()

app.use(methodOverride('_method'))
app.use(parser.urlencoded({ extended: true }))

app.use("/myUrlPrefix", myController)

app.set("view engine", "hbs")
app.listen(4000, () => console.log("Major Tom to Ground Control"))