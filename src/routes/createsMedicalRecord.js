const express = require('express');
const router = express.Router();

const MedicalRecordController = require('../app/controllers/MedicalRecordController');

router.get('/createsMedicalRecord', MedicalRecordController.create);

module.exports = router;