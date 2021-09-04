const Account = require('../models/Account');
const { mutileMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const { accounts } = require('./AccountController');

class MeController {
  //[GET] stored/account
  storedAccounts(req, res, next) {
    Promise.all([Account.find({}), Account.countDocumentsDeleted()])
      .then(([accounts, deleteCount]) =>
        res.render('me/stored-accounts', {
          deleteCount,
          accounts: mutileMongooseToObject(accounts),
        })
      )
      .catch(next);
    }
  //[GET] /me/trash/account
  trashAccounts(req, res, next) {
    Account.findDeleted({})
      .then((accounts) =>
        res.render('me/trash-accounts', {
          accounts: mutileMongooseToObject(accounts),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
