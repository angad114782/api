const AC = require('../models/ac.model');

exports.createAC = async (req, res) => {
    try {
        const ac = new AC({
            airCooling: req.body.airCooling,
            heater: req.body.heater,
            climateControl: req.body.climateControl,
            acConditioner: req.body.acConditioner,
            acCompressor: req.body.acCompressor,
            blowerMotor: req.body.blowerMotor,
            airDistribution: req.body.airDistribution
        });

        await ac.save();
        res.status(201).json(ac);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getACById = async (req, res) => {
    try {
        const ac = await AC.findById(req.params.id);
        if (!ac) {
            return res.status(404).json({ error: 'AC not found' });
        }
        res.status(200).json(ac);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllACs = async (req, res) => {
    try {
        const acs = await AC.find();
        res.status(200).json(acs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
