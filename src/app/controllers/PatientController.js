const Account = require('../models/Account');
const { mutileMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class PatientController {
  //[GET] accountPatient/login


  login(req, res) { 
    res.render('accountPatient/login');
  }

  //[Get] accountPatient/sginin
  sginin(req, res) { 
    res.render('accountPatient/sginin');
  }
    //[POST] accountPatient/DANKy
  danki(req, res, next) { 
    res.json(req.body);
  }
}

module.exports = new PatientController();
