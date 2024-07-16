const Engine = require('../models/engine.model');

const createEngine = async (engineData) => {
    try {
        const engine = await Engine.create(engineData);
        return engine;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getEngineById = async (engineId) => {
    try {
        const engine = await Engine.findById(engineId);
        if (!engine) {
            throw new Error('Engine not found');
        }
        return engine;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllEngines = async () => {
    try {
        const engines = await Engine.find();
        return engines;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createEngine,
    getEngineById,
    getAllEngines
};
