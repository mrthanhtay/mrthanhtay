class MedicalRecordController {
    create(req, res, next) {
        res.render('medicalRecord/createsMedicalRecord');
    }
}
module.exports = new MedicalRecordController();