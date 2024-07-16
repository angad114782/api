const mongoose = require('mongoose');

const featuresSchema = new mongoose.Schema({
    remoteCentralLock: { type: String, required: true },
    remoteCentralLockImage: { type: String, required: true },
    stereo: { type: String, required: true },
    stereoImage: { type: String, required: true },
    sunroof: { type: String, required: true },
    sunroofImage: { type: String, required: true },
    gpsNavigation: { type: String, required: true },
    rearDefogger: { type: String, required: true },
    fogLamps: { type: String, required: true },
    toolkitJackHandle: { type: String, required: true },
    airbags: { type: String, required: true },
    abs: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Features = mongoose.model('Features', featuresSchema);

module.exports = Features;
