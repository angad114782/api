const Exterior = require('../models/exterior.model');

const createExterior = async (exteriorData) => {
    try {
        const exterior = await Exterior.create(exteriorData);
        return exterior;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getExteriorById = async (exteriorId) => {
    try {
        const exterior = await Exterior.findById(exteriorId);
        if (!exterior) {
            throw new Error('Exterior features not found');
        }
        return exterior;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllExteriors = async () => {
    try {
        const exteriors = await Exterior.find();
        return exteriors;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createExterior,
    getExteriorById,
    getAllExteriors
};
