const express = require('express');
const router = express.Router();
const documentController = require('../controllers/document.controller');
const upload = require('../config/upload');

router.post('/doc', upload.fields([
  { name: 'rcFrontPhoto', maxCount: 1 },
  { name: 'rcBackPhoto', maxCount: 1 },
  { name: 'pucCertificatePhoto', maxCount: 1 }
]), documentController.createDocument);

module.exports = router;
