const Features = require('../models/features.model');

exports.createFeatures = async (req, res) => {
    try {
        const features = new Features({
            remoteCentralLock: req.body.remoteCentralLock,
            remoteCentralLockImage: req.files.remoteCentralLockImage ? req.files.remoteCentralLockImage[0].path : '',
            stereo: req.body.stereo,
            stereoImage: req.files.stereoImage ? req.files.stereoImage[0].path : '',
            sunroof: req.body.sunroof,
            sunroofImage: req.files.sunroofImage ? req.files.sunroofImage[0].path : '',
            gpsNavigation: req.body.gpsNavigation,
            rearDefogger: req.body.rearDefogger,
            fogLamps: req.body.fogLamps,
            toolkitJackHandle: req.body.toolkitJackHandle,
            airbags: req.body.airbags,
            abs: req.body.abs
        });

        await features.save();
        res.status(201).json(features);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getFeaturesById = async (req, res) => {
    try {
        const features = await Features.findById(req.params.id);
        if (!features) {
            return res.status(404).json({ error: 'Features not found' });
        }
        res.status(200).json(features);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllFeatures = async (req, res) => {
    try {
        const features = await Features.find();
        res.status(200).json(features);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
