// Create And Export Student Schema (Model) data => name, age, gender
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
});

module.exports = mongoose.model('Student', studentSchema);;
