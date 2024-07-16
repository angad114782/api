const express = require('express');
const router = express.Router();
const testDriveController = require('../controllers/testDrive.controller');
const upload = require('../config/upload');

router.post('/', upload.fields([
    { name: 'steeringType', maxCount: 1 },
    { name: 'steeringWheel', maxCount: 1 },
    { name: 'suspensionSystem', maxCount: 1 },
    { name: 'shocker', maxCount: 1 },
    { name: 'transmissionsAndBrakes', maxCount: 1 },
    { name: 'clutchSystem', maxCount: 1 },
    { name: 'transmissionAutomatic', maxCount: 1 },
    { name: 'transmissionManual', maxCount: 1 },
    { name: 'brakes', maxCount: 1 },
    { name: 'accelerator', maxCount: 1 },
    { name: 'alignmentAndBalancing', maxCount: 1 }
]), testDriveController.createTestDrive);

router.get('/:id', testDriveController.getTestDriveById);
router.get('/', testDriveController.getAllTestDrives);

module.exports = router;
