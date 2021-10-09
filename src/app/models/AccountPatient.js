const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accounts_patient = new Schema({
    googleId: { type: String, required: true },
    gmail: { type: String, required: true },
    name: { type: String, required: true }

}, {
    timestamps: true
});

module.exports = mongoose.model('accounts_patient', accounts_patient);