const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const MedicalRecord = new Schema(
  {
    namePatient: { type: String, minLength: 1, maxLength: 255 },
    sex: { type: String },
    bithDay: { type: String },
    address: { type: String },
    phone: { type: String },
    diagnose: { type: String },
    prescription: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    note: { type: String }
  },
  {
    timestamps: true,
  },
);
//add plugin
mongoose.plugin(slug);
MedicalRecord.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Medical-Record', MedicalRecord);
