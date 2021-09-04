const MedicalRecord = require('../models/MedicalRecord');
const { mutileMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class AccountController {
  //[GET] /MedicalRecord/:id
  show(req, res, next) {
    MedicalRecord.findOne({ id: req.params.id })
      .then((medicalrecords) => {
        res.render('medicalRecords/show', {
          medicalrecords: mongooseToObject(medicalrecords),
        });
      })
      .catch(next);
  }
}

module.exports = new AccountController();
