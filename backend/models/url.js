const mongoose = require('mongoose');

// define the schema for storing url shortening data
const urlSchema = new mongoose.Schema({
  // stores the unique identifier for the short url
  shortId: {
    type: String,
    required: true,
    unique: true
  },
  // stores the original url to which the short url redirects
  redirectUrl: {
    type: String,
    required: true
  },
  // stores an array of objects, each containing a timestamp when the short url was clicked
  totalClicks: {
    type: Array,
    default: []
  }
});

// export the mongoose model 'url' based on the 'urlschema'
module.exports = mongoose.model('url', urlSchema);
