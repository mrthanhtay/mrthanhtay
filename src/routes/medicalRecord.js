const express = require('express');
const router = express.Router();

const medicalRecordController = require('../app/controllers/MedicalRecordController');

router.delete('/:id/xoa-that', medicalRecordController.destroyThat);
router.get('/:id', medicalRecordController.show);
router.delete('/:id', medicalRecordController.destroy);
module.exports = router;
