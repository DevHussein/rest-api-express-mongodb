const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  date: {
    required: true,
    type: Date,
  },
});

module.exports = mongoose.model("Data", dataSchema);
