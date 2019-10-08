const express = require("express")
const hbs = require("hbs")
const app = express()
const parser = require("body-parser")
const methodOverride = require("method-override")

app.use(methodOverride("_method"))
app.use("/assets", express.static("public"))
app.use(parser.urlencoded({ extended: true }))
app.set("view engine", "hbs")

const myController = require("./controllers/controller")
app.use("/", myController)

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"))

// https://git.generalassemb.ly/aspittel/express-checklist
// syntax help and troubleshooting
// https://github.com/coopertuch/Heroku-Checklist
// syntax help and troubleshooting