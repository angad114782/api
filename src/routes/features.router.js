const express = require('express');
const router = express.Router();
const featuresController = require('../controllers/features.controller');
const upload = require('../config/upload');

router.post('/', upload.fields([
    { name: 'remoteCentralLock', maxCount: 1 },
    { name: 'remoteCentralLockImage', maxCount: 1 },
    { name: 'stereo', maxCount: 1 },
    { name: 'stereoImage', maxCount: 1 },
    { name: 'sunroof', maxCount: 1 },
    { name: 'sunroofImage', maxCount: 1 },
    { name: 'gpsNavigation', maxCount: 1 },
    { name: 'rearDefogger', maxCount: 1 },
    { name: 'fogLamps', maxCount: 1 },
    { name: 'toolkitJackHandle', maxCount: 1 },
    { name: 'airbags', maxCount: 1 },
    { name: 'abs', maxCount: 1 }
]), featuresController.createFeatures);

router.get('/:id', featuresController.getFeaturesById);
router.get('/', featuresController.getAllFeatures);

module.exports = router;
