const testDriveService = require('../services/testDrive.service');

const createTestDrive = async (req, res) => {
    try {
        const testDriveData = req.body;
        const testDrive = await testDriveService.createTestDrive(testDriveData);
        res.status(201).send(testDrive);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getTestDriveById = async (req, res) => {
    try {
        const testDrive = await testDriveService.getTestDriveById(req.params.id);
        res.status(200).send(testDrive);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getAllTestDrives = async (req, res) => {
    try {
        const testDrives = await testDriveService.getAllTestDrives();
        res.status(200).send(testDrives);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    createTestDrive,
    getTestDriveById,
    getAllTestDrives
};
