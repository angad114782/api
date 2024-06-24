require('dotenv').config();
const crypto = require('crypto');
const OTP = require('../models/otp.model');
const User = require('../models/user.models');
const bcrypt = require('bcryptjs');
const nodemailer = require('../config/emailConfig');

const sendOtpEmail = async (email, otp) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP for Password Reset',
        text: `Your OTP for password reset is ${otp}`
    };

    try {
        await nodemailer.sendMail(mailOptions);
        console.log(`OTP is  ${otp}`);
    } catch (error) {
        console.error(`Error sending OTP to ${email}: ${error.message}`);
        throw new Error('Failed to send OTP');
    }
};

const createOtp = async (userId, email) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP
    await OTP.create({ userId, otp });
    await sendOtpEmail(email, otp);
    return otp;
};

const validateOtp = async (otp) => {
    const otpRecord = await OTP.findOne({ otp });
    if (!otpRecord) {
        throw new Error('Invalid or expired OTP');
    }
    return otpRecord.userId;
};

const resetPasswordWithOtp = async (otp, newPassword) => {
    const userId = await validateOtp(otp);
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    user.password = await bcrypt.hash(newPassword, 8);
    await user.save();
    await OTP.deleteOne({ otp });
    return user;
};

const forgotPassword = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User with this email does not exist');
    }
    const otp = await createOtp(user._id, email);
    return otp;
};

module.exports = {
    createOtp,
    validateOtp,
    resetPasswordWithOtp,
    forgotPassword
};
