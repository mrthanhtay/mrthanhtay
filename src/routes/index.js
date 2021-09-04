const newsRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me');
const accountsRouter = require('./accounts');

function route(app) {
  app.use('/news', newsRouter);

  app.use('/me', meRouter);

  app.use('/accounts', accountsRouter);

  app.use('/', siteRouter);
}

module.exports = route;
