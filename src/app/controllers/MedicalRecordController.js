const MedicalRecord = require('../models/MedicalRecord');
const { mutileMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class MedicalRecordController {
    //[GET] /MedicalRecord/create
    create(req, res, next) {
            res.render('medicalRecords/create')
        }
        //[POST] /medicalRecord/storeMedicalRecord
    storeMedicalRecord(req, res, next) {
            // res.json(req.body);
            // MedicalRecord.create({ res.json(req.body) }, function(err, small) {
            //     if (err) return handleError(err);
            // })
            const medicalRecord = new MedicalRecord(req.body);
            medicalRecord.save();
            // .then(res.redirect(" patch"))
            res.send('MEDICAL-RECORD SAVED !');
        }
        //[GET] /MedicalRecord/:id
    show(req, res, next) {
            MedicalRecord.findById(req.params.id)
                .then((medicalrecords) => {
                    res.render('medicalRecords/show', {
                        medicalrecords: mongooseToObject(medicalrecords),
                    });
                })
                .catch(next);
        }
        //[DELETE] medicalRecord/:id
    destroy(req, res, next) {
            MedicalRecord.delete({ _id: req.params.id })
                .then(() => res.redirect('back'))
                .catch(next);
        }
        //[DELETE] medicalRecord/:id/xoa-that
    destroyThat(req, res, next) {
        MedicalRecord.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    restore(req, res, next) {
            MedicalRecord.restore({ _id: req.params.id })
                .then(() => res.redirect('back'))
                .catch(next);
        }
        //[POST]
    handFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                MedicalRecord.delete({ _id: { $in: req.body.medicalRecordIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ mesage: 'hanh dong khong hop le' })
        }
    }
}


module.exports = new MedicalRecordController();