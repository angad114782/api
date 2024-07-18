const interiorService = require('../services/interior.service');

const Interior = require('../models/interior.model');

const createInterior = async (req, res) => {
    try {
        const {
            powerWindow, powerWindowFunctionFrontRHS, powerWindowFunctionFrontLHS, powerWindowFunctionRearRHS,
            powerWindowFunctionRearLHS, manualWindowFunctionFrontRHS, manualWindowFunctionFrontLHS,
            manualWindowFunctionRearRHS, manualWindowFunctionRearLHS, combinationSwitch, dashboardCondition,
            handbrake, carElectrical, cngKit, keyCondition, roofInside, steeringMountedControls, insideRearViewMirror,
            driverSeatCondition, passengerSeatCondition, rearSeatCondition, starterMotor, instrumentPanelGaugesFuel,
            instrumentPanelGaugesTachometer, horns, chargerUsbPort, interiorLights, musicSystemType, musicSystem, speakers
        } = req.body;

        const newInterior = new Interior({
            odometerImg: req.files['odometerImg'][0].path,
            dashboardImg: req.files['dashboardImg'][0].path,
            frontSeatsImg: req.files['frontSeatsImg'][0].path,
            rearSeatsImg: req.files['rearSeatsImg'][0].path,
            handbrakeGearleverBootImg: req.files['handbrakeGearleverBootImg'][0].path,
            powerWindowDriverImg: req.files['powerWindowDriverImg'][0].path,
            pushButtonOnOffImg: req.files['pushButtonOnOffImg'][0].path,
            cngKitImage: req.files['cngKitImage'][0].path,
            powerWindow, powerWindowFunctionFrontRHS, powerWindowFunctionFrontLHS, powerWindowFunctionRearRHS,
            powerWindowFunctionRearLHS, manualWindowFunctionFrontRHS, manualWindowFunctionFrontLHS,
            manualWindowFunctionRearRHS, manualWindowFunctionRearLHS, combinationSwitch, dashboardCondition,
            handbrake, carElectrical, cngKit, keyCondition, roofInside, steeringMountedControls, insideRearViewMirror,
            driverSeatCondition, passengerSeatCondition, rearSeatCondition, starterMotor, instrumentPanelGaugesFuel,
            instrumentPanelGaugesTachometer, horns, chargerUsbPort, interiorLights, musicSystemType, musicSystem, speakers
        });

        await newInterior.save();
        res.status(201).json(newInterior);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getInteriorById = async (req, res) => {
    try {
        const interior = await interiorService.getInteriorById(req.params.id);
        res.status(200).send(interior);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getAllInteriors = async (req, res) => {
    try {
        const interiors = await interiorService.getAllInteriors();
        res.status(200).send(interiors);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    createInterior,
    getInteriorById,
    getAllInteriors
};
