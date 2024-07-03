const express = require('express');
const router = express.Router();
const upload = require('../config/upload');

// File upload middleware
const handleFileUpload = (req, res, next) => {
    upload.fields([
        { name: 'rcFrontPhoto', maxCount: 1 },
        { name: 'rcBackPhoto', maxCount: 1 }
    ])(req, res, err => {
        if (err) {
            // Handle any upload error
            // console.error('File upload error:', err);
            return res.status(400).json({ error: 'File upload failed', message: err.message });
        }
        
        // Log uploaded files
        // console.log('Uploaded Files:', req.files);

        // Move to the next middleware or controller
        next();
    });
};

module.exports = handleFileUpload;
