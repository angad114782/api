const Exterior = require('../models/exterior.model');

exports.createExterior = async (req, res) => {
    try {
        const data = {
            frontLeftImage: req.files.frontLeftImage ? req.files.frontLeftImage[0].path : undefined,
            frontImage: req.files.frontImage ? req.files.frontImage[0].path : undefined,
            frontRightImage: req.files.frontRightImage ? req.files.frontRightImage[0].path : undefined,
            grill: req.body.grill,
            windowScreenGlassFront: req.body.windowScreenGlassFront,
            bonnetHood: req.body.bonnetHood,
            windScreenWiperFront: req.body.windScreenWiperFront,
            headlightRH: req.body.headlightRH,
            frontRightIndicator: req.body.frontRightIndicator,
            headlightLH: req.body.headlightLH,
            frontLeftIndicator: req.body.frontLeftIndicator,
            headlampSupport: req.body.headlampSupport,
            parkingLightFront: req.body.parkingLightFront,
            bonnetPatti: req.body.bonnetPatti,
            rightImage: req.files.rightImage ? req.files.rightImage[0].path : undefined,
            apron: req.body.apron,
            rhSideApron: req.body.rhSideApron,
            alloyWheels: req.body.alloyWheels,
            alloyWheelsFrontRHS: req.body.alloyWheelsFrontRHS,
            alloyWheelsRearRHS: req.body.alloyWheelsRearRHS,
            alloyWheelsFrontLHS: req.body.alloyWheelsFrontLHS,
            alloyWheelsRearLHS: req.body.alloyWheelsRearLHS,
            steelWheelRimRearRHS: req.body.steelWheelRimRearRHS,
            steelWheelRimFrontRHS: req.body.steelWheelRimFrontRHS,
            steelWheelRimRearLHS: req.body.steelWheelRimRearLHS,
            steelWheelRimFrontLHS: req.body.steelWheelRimFrontLHS,
            tyreFrontRH: req.body.tyreFrontRH,
            tyreFrontRHImage: req.files.tyreFrontRHImage ? req.files.tyreFrontRHImage[0].path : undefined,
            rhRearViewMirror: req.body.rhRearViewMirror,
            rhQuarterPanel: req.body.rhQuarterPanel,
            rhFinder: req.body.rhFinder,
            rhAPillar: req.body.rhAPillar,
            frontRHDoor: req.body.frontRHDoor,
            rhBPillar: req.body.rhBPillar,
            rearRHDoor: req.body.rearRHDoor,
            rhCPillar: req.body.rhCPillar,
            rhRunningBoard: req.body.rhRunningBoard,
            tyreRearRH: req.body.tyreRearRH,
            tyreRearRHImage: req.files.tyreRearRHImage ? req.files.tyreRearRHImage[0].path : undefined,
            imageRearRight: req.body.imageRearRight,
            imageRear: req.body.imageRear,
            imageRearLeft: req.body.imageRearLeft,
            imageRearBumper: req.body.imageRearBumper,
            tailLightRH: req.body.tailLightRH,
            tailLightLH: req.body.tailLightLH,
            dickky: req.body.dickky,
            dickkyBootfloor: req.body.dickkyBootfloor,
            spareWheel: req.body.spareWheel,
            spareWheelImage: req.files.spareWheelImage ? req.files.spareWheelImage[0].path : undefined,
            windscreenGlassBack: req.body.windscreenGlassBack,
            windScreenWiperRear: req.body.windScreenWiperRear,
            wheelCap: req.body.wheelCap,
            reverseCameraAndParkingSensor: req.body.reverseCameraAndParkingSensor,
            leftImage: req.files.leftImage ? req.files.leftImage[0].path : undefined,
            tyreRearLH: req.body.tyreRearLH,
            tyreRearLHImage: req.files.tyreRearLHImage ? req.files.tyreRearLHImage[0].path : undefined,
            lhRunningBoard: req.body.lhRunningBoard,
            lhCPillar: req.body.lhCPillar,
            rearLHDoor: req.body.rearLHDoor,
            lhBPillar: req.body.lhBPillar,
            frontLHDoor: req.body.frontLHDoor,
            lhAPillar: req.body.lhAPillar,
            lhFinder: req.body.lhFinder,
            lhQuarterPanel: req.body.lhQuarterPanel,
            tyreFrontLH: req.body.tyreFrontLH,
            tyreFrontLHImage: req.files.tyreFrontLHImage ? req.files.tyreFrontLHImage[0].path : undefined,
            lhRearViewMirror: req.body.lhRearViewMirror,
            lhSideApron: req.body.lhSideApron,
            firewall: req.body.firewall,
            underbody: req.body.underbody,
            roof: req.body.roof,
            roofImage: req.files.roofImage ? req.files.roofImage[0].path : undefined,
        };

        const exterior = new Exterior(data);
        await exterior.save();
        res.status(201).json(exterior);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getExteriorById = async (req, res) => {
    try {
        const exterior = await Exterior.findById(req.params.id);
        if (!exterior) {
            return res.status(404).json({ error: 'Exterior not found' });
        }
        res.status(200).json(exterior);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllExteriors = async (req, res) => {
    try {
        const exteriors = await Exterior.find();
        res.status(200).json(exteriors);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
