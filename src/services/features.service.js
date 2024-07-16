const Features = require('../models/features.model');

const createFeatures = async (featuresData) => {
    try {
        const features = await Features.create(featuresData);
        return features;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getFeaturesById = async (featuresId) => {
    try {
        const features = await Features.findById(featuresId);
        if (!features) {
            throw new Error('Features not found');
        }
        return features;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllFeatures = async () => {
    try {
        const features = await Features.find();
        return features;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createFeatures,
    getFeaturesById,
    getAllFeatures
};
