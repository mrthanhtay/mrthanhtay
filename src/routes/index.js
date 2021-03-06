const newsRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me');
const accountsRouter = require('./accounts');
const patientRouter = require('./accountPatient');
const medicalrecordRouter = require('./medicalRecord');

function route(app) {
    // app.use('/medicalRecord', createsMedicalRecord);
    app.use('/news', newsRouter);
    app.use('/google', patientRouter)
    app.use('/me', meRouter);

    app.use('/accountPatient', patientRouter);

    app.use('/medicalRecord', medicalrecordRouter);

    app.use('/accountPatient', patientRouter);

    app.use('/accounts', accountsRouter);

    app.use('/', siteRouter);
}

module.exports = route;