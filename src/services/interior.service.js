const Interior = require('../models/interior.model');

const createInterior = async (interiorData) => {
    try {
        const interior = await Interior.create(interiorData);
        return interior;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getInteriorById = async (interiorId) => {
    try {
        const interior = await Interior.findById(interiorId);
        if (!interior) {
            throw new Error('Interior features not found');
        }
        return interior;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllInteriors = async () => {
    try {
        const interiors = await Interior.find();
        return interiors;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createInterior,
    getInteriorById,
    getAllInteriors
};
