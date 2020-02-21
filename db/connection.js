const mongoose = require("mongoose");
mongoose.Promise = Promise;

let mongoURI = "";
mongoose.set("useUnifiedTopology", true);

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = mongoURI =
    "mongodb+srv://coop:0c5G2qvr36gkFZjg@cluster0-gr3pm.mongodb.net/test?retryWrites=true&w=majority";
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance => console.log(`connected to db ${instance}`))
  .catch(error => console.log("failed", error));

module.exports = mongoose;

//   "mongodb+srv://coop:0c5G2qvr36gkFZjg@cluster0-gr3pm.mongodb.net/test?retryWrites=true&w=majority";
//    mongoURI = "mongodb://localhost/cheerupsdb";
