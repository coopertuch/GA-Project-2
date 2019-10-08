const mongoose = require('mongoose');
mongoose.Promise = Promise
mongoose.set('useUnifiedTopology', true);

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/cheerupsdb";
};

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .catch(error => console.log('failed', error));

module.exports = mongoose