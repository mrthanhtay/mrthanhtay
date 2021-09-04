const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController.js');

// newsController.index();
router.get('/stored/accounts', meController.storedAccounts);
router.get('/trash/accounts', meController.trashAccounts);

module.exports = router;
