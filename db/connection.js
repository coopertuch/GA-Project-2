const mongoose = require("mongoose");
mongoose.Promise = Promise;

let mongoURI = "";
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
