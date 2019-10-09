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

app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
    console.log("Major Tom to Ground Control")
})

// https://git.generalassemb.ly/aspittel/express-checklist
// syntax help and troubleshooting
// https://git.generalassemb.ly/seir-826/w06d03-seir826-heroku-atlas-deployment
// syntax help and troubleshooting
// https://mongoosejs.com/docs/validation.html
// maxlength syntax