const express = require('express');
const router = express.Router();
const engineController = require('../controllers/engine.controller');
const upload = require('../config/upload');

router.post('/', upload.fields([
    { name: 'engineCompartmentImage', maxCount: 1 },
    { name: 'engineCondition', maxCount: 1 },
    { name: 'engineSound', maxCount: 1 },
    { name: 'engineVideo', maxCount: 1 }, 
    { name: 'battery', maxCount: 1 },
    { name: 'blowbyBackCompression', maxCount: 1 },
    { name: 'exhaustSmokeColour', maxCount: 1 },
    { name: 'silencer', maxCount: 1 },
    { name: 'clutchOperation', maxCount: 1 },
    { name: 'gearBox', maxCount: 1 },
    { name: 'engineOil', maxCount: 1 },
    { name: 'engineOther', maxCount: 1 },
    { name: 'radiator', maxCount: 1 },
    { name: 'coolant', maxCount: 1 },
    { name: 'tappetNoise', maxCount: 1 },
    { name: 'fuelInjector', maxCount: 1 },
    { name: 'engineMountings', maxCount: 1 },
    { name: 'turboCharger', maxCount: 1 },
    { name: 'summary', maxCount: 1 }
]), engineController.createEngine);

router.get('/:id', engineController.getEngineById);
router.get('/', engineController.getAllEngines);

module.exports = router;
