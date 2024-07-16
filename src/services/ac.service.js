const AC = require('../models/ac.model');

const createAC = async (acData) => {
    try {
        const ac = await AC.create(acData);
        return ac;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getACById = async (acId) => {
    try {
        const ac = await AC.findById(acId);
        if (!ac) {
            throw new Error('AC features not found');
        }
        return ac;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllACs = async () => {
    try {
        const acs = await AC.find();
        return acs;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createAC,
    getACById,
    getAllACs
};
