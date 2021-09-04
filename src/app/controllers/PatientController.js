const Account = require('../models/Account');
const { mutileMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class PatientController {
  //[GET] accountPatient/login
  login(req, res) { 
    res.render('accountPatient/login');
  }
}

module.exports = new PatientController();
