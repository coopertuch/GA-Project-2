const mongoose = require('mongoose');
let mongoURI = "";
mongoose.set('useUnifiedTopology', true);

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/cheerupsdb";
};

mongoose.connect(mongoURI, { useNewUrlParser: true })
    .catch(error => error);

mongoose.Promise = Promise
module.exports = mongoose