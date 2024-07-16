const mongoose = require('mongoose');

const acSchema = new mongoose.Schema({
    airCooling: { type: String, required: true },
    heater: { type: String, required: true },
    climateControl: { type: String, required: true },
    acConditioner: { type: String, required: true },
    acCompressor: { type: String, required: true },
    blowerMotor: { type: String, required: true },
    airDistribution: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const AC = mongoose.model('AC', acSchema);

module.exports = AC;
