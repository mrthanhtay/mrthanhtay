const newsRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me');
const accountsRouter = require('./accounts');
const patientRouter = require('./accountPatient');
const medicalrecordRouter = require('./medicalrecord');
function route(app) {
  app.use('/news', newsRouter);

  app.use('/me', meRouter);

  app.use('/accountPatient', patientRouter);
  
  app.use('/medicalRecord', medicalrecordRouter);

  app.use('/accounts', accountsRouter);

  app.use('/', siteRouter);
}

module.exports = route;
