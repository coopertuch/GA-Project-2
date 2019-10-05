const express = require('express')
const hbs = require('hbs')

const app = express()

app.set("view engine", "hbs")
app.listen(4000, () => console.log("Major Tom to Ground Control"))