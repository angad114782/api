const mongoose = require('mongoose');

const testDriveSchema = new mongoose.Schema({
    steeringType: {
        type: String,
        required: true,
    },
    steeringWheel: {
        type: String,
        required: true,
    },
    suspensionSystem: {
        type: String,
        required: true,
    },
    shocker: {
        type: String,
        required: true,
    },
    transmissionsAndBrakes: {
        type: String,
        required: true,
    },
    clutchSystem: {
        type: String,
        required: true,
    },
    transmissionAutomatic: {
        type: String,
        required: true,
    },
    transmissionManual: {
        type: String,
        required: true,
    },
    brakes: {
        type: String,
        required: true,
    },
    accelerator: {
        type: String,
        required: true,
    },
    alignmentAndBalancing: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const TestDrive = mongoose.model('TestDrive', testDriveSchema);

module.exports = TestDrive;
