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

app.listen(4000, () => console.log("Major Tom to Ground Control"))

// https://git.generalassemb.ly/aspittel/express-checklist
// syntax and troubleshooting