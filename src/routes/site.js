const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
router.get('/room', siteController.createRoom);
router.get('/search', siteController.search);
router.get('/', siteController.home);

module.exports = router;