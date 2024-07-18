const express = require('express');
const router = express.Router();
const interiorController = require('../controllers/interior.controller');
const upload = require('../config/upload');

router.post('/', upload.fields([
    { name: 'odometerImg', maxCount: 1 },
    { name: 'dashboardImg', maxCount: 1 },
    { name: 'frontSeatsImg', maxCount: 1 },
    { name: 'rearSeatsImg', maxCount: 1 },
    { name: 'handbrakeGearleverBootImg', maxCount: 1 },
    { name: 'powerWindowDriverImg', maxCount: 1 },
    { name: 'pushButtonOnOffImg', maxCount: 1 },
    { name: 'powerWindow', maxCount: 1 },
    { name: 'powerWindowFunctionFrontRHS', maxCount: 1 },
    { name: 'powerWindowFunctionFrontLHS', maxCount: 1 },
    { name: 'powerWindowFunctionRearRHS', maxCount: 1 },
    { name: 'powerWindowFunctionRearLHS', maxCount: 1 },
    { name: 'manualWindowFunctionFrontRHS', maxCount: 1 },
    { name: 'manualWindowFunctionFrontLHS', maxCount: 1 },
    { name: 'manualWindowFunctionRearRHS', maxCount: 1 },
    { name: 'manualWindowFunctionRearLHS', maxCount: 1 },
    { name: 'combinationSwitch', maxCount: 1 },
    { name: 'dashboardCondition', maxCount: 1 },
    { name: 'handbrake', maxCount: 1 },
    { name: 'carElectrical', maxCount: 1 },
    { name: 'cngKit', maxCount: 1 },
    { name: 'cngKitImage', maxCount: 1 },
    { name: 'keyCondition', maxCount: 1 },
    { name: 'roofInside', maxCount: 1 },
    { name: 'steeringMountedControls', maxCount: 1 },
    { name: 'insideRearViewMirror', maxCount: 1 },
    { name: 'driverSeatCondition', maxCount: 1 },
    { name: 'passengerSeatCondition', maxCount: 1 },
    { name: 'rearSeatCondition', maxCount: 1 },
    { name: 'starterMotor', maxCount: 1 },
    { name: 'instrumentPanelGaugesFuel', maxCount: 1 },
    { name: 'instrumentPanelGaugesTachometer', maxCount: 1 },
    { name: 'horns', maxCount: 1 },
    { name: 'chargerUsbPort', maxCount: 1 },
    { name: 'interiorLights', maxCount: 1 },
    { name: 'musicSystemType', maxCount: 1 },
    { name: 'musicSystem', maxCount: 1 },
    { name: 'speakers', maxCount: 1 }
]), interiorController.createInterior);

router.get('/:id', interiorController.getInteriorById);
router.get('/', interiorController.getAllInteriors);

module.exports = router;
