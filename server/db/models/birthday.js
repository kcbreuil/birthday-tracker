const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const birthdaySchema = new Schema({
  username: {
    type: String,
    required: true
  },
  cohort_number: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

const Birthday = mongoose.model('Birthday', birthdaySchema);

module.exports = Birthday;
