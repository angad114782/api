const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300 // 5 minutes
    }
});

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;
