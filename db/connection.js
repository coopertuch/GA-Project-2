const mongoose = require("mongoose");
mongoose.Promise = Promise;

let mongoURI =
  "mongodb+srv://coopertuch:aufflvC92WYg7MC5@cluster0-gr3pm.mongodb.net/test?retryWrites=true&w=majority";
mongoose.set("useUnifiedTopology", true);

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/cheerupsdb";
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance => console.log(`connected to db ${instance}`))
  .catch(error => console.log("failed", error));

module.exports = mongoose;
