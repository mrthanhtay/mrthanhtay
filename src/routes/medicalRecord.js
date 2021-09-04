const express = require('express');
const router = express.Router();

const medicalRecordController = require('../app/controllers/MedicalRecordController');


router.get('/:id', medicalRecordController.show);

module.exports = router;
