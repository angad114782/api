const mongoose = require('mongoose');

const interiorSchema = new mongoose.Schema({
    odometerImg: {
        type: String,
        required: true
    },
    dashboardImg: {
        type: String,
        required: true
    },
    frontSeatsImg: {
        type: String,
        required: true
    },
    rearSeatsImg: {
        type: String,
        required: true
    },
    handbrakeGearleverBootImg: {
        type: String,
        required: true
    },
    powerWindowDriverImg: {
        type: String,
        required: true
    },
    pushButtonOnOffImg: {
        type: String,
        required: true
    },
    powerWindow: String,
    powerWindowFunctionFrontRHS: String,
    powerWindowFunctionFrontLHS: String,
    powerWindowFunctionRearRHS: String,
    powerWindowFunctionRearLHS: String,
    manualWindowFunctionFrontRHS: String,
    manualWindowFunctionFrontLHS: String,
    manualWindowFunctionRearRHS: String,
    manualWindowFunctionRearLHS: String,
    combinationSwitch: String,
    dashboardCondition: String,
    handbrake: String,
    carElectrical: String,
    cngKit: String,
    cngKitImage: {
        type: String,
        required: true
    },
    keyCondition: String,
    roofInside: String,
    steeringMountedControls: String,
    insideRearViewMirror: String,
    driverSeatCondition: String,
    passengerSeatCondition: String,
    rearSeatCondition: String,
    starterMotor: String,
    instrumentPanelGaugesFuel: String,
    instrumentPanelGaugesTachometer: String,
    horns: String,
    chargerUsbPort: String,
    interiorLights: String,
    musicSystemType: String,
    musicSystem: String,
    speakers: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Interior = mongoose.model('Interior', interiorSchema);

module.exports = Interior;
