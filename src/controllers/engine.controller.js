const engineService = require('../services/engine.service');

const createEngine = async (req, res) => {
    try {
        const engineData = req.body;
        engineData.engineCompartmentImage = req.files['engineCompartmentImage'][0].path;
        engineData.engineVideo = req.files['engineVideo'][0].path;

        const engine = await engineService.createEngine(engineData);
        res.status(201).send(engine);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getEngineById = async (req, res) => {
    try {
        const engine = await engineService.getEngineById(req.params.id);
        res.status(200).send(engine);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getAllEngines = async (req, res) => {
    try {
        const engines = await engineService.getAllEngines();
        res.status(200).send(engines);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    createEngine,
    getEngineById,
    getAllEngines
};
