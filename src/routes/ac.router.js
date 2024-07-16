const express = require('express');
const router = express.Router();
const acController = require('../controllers/ac.controller');
const upload = require('../config/upload');

router.post('/', upload.fields([
    { name: 'airCooling', maxCount: 1 },
    { name: 'heater', maxCount: 1 },
    { name: 'climateControl', maxCount: 1 },
    { name: 'acConditioner', maxCount: 1 },
    { name: 'acCompressor', maxCount: 1 },
    { name: 'blowerMotor', maxCount: 1 },
    { name: 'airDistribution', maxCount: 1 }
]), acController.createAC);

router.get('/:id', acController.getACById);
router.get('/', acController.getAllACs);

module.exports = router;
