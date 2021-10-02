const Account = require('../models/Account');
const { mutileMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //Trang Chu
    home(req, res, next) {
        Account.find({})
            .then((accounts) => {
                res.render('home', {
                    accounts: mutileMongooseToObject(accounts),
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
    createRoom(req, res) {
        res.render('room');
    }
}

module.exports = new SiteController();