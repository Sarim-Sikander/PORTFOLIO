const path = require('path');
const express = require('express');

const adminController = require('../controllers/main')

const router = express.Router();

router.get('/', adminController.getMainPage);

router.post('/form', adminController.getFormEmail)

module.exports = router;