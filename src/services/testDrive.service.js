const TestDrive = require('../models/testDrive.model');

const createTestDrive = async (testDriveData) => {
    try {
        const testDrive = await TestDrive.create(testDriveData);
        return testDrive;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getTestDriveById = async (testDriveId) => {
    try {
        const testDrive = await TestDrive.findById(testDriveId);
        if (!testDrive) {
            throw new Error('Test Drive not found');
        }
        return testDrive;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllTestDrives = async () => {
    try {
        const testDrives = await TestDrive.find();
        return testDrives;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createTestDrive,
    getTestDriveById,
    getAllTestDrives
};
