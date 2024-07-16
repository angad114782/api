const mongoose = require('mongoose');

const engineSchema = new mongoose.Schema({
    engineCompartmentImage: {
        type: String,
        required: true,
    },
    engineCondition: {
        type: String,
        required: true,
    },
    engineSound: {
        type: String,
        required: true,
    },
    engineVideo: {
        type: String,
        required: true,
    },
    battery: {
        type: String,
        required: true,
    },
    blowbyBackCompression: {
        type: String,
        required: true,
    },
    exhaustSmokeColour: {
        type: String,
        required: true,
    },
    silencer: {
        type: String,
        required: true,
    },
    clutchOperation: {
        type: String,
        required: true,
    },
    gearBox: {
        type: String,
        required: true,
    },
    engineOil: {
        type: String,
        required: true,
    },
    engineOther: {
        type: String,
        required: true,
    },
    radiator: {
        type: String,
        required: true,
    },
    coolant: {
        type: String,
        required: true,
    },
    tappetNoise: {
        type: String,
        required: true,
    },
    fuelInjector: {
        type: String,
        required: true,
    },
    engineMountings: {
        type: String,
        required: true,
    },
    turboCharger: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Engine = mongoose.model('Engine', engineSchema);

module.exports = Engine;
