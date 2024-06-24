
const resetService = require('../services/reset.servicemail');
const userService = require('../services/user.service');

const requestOtp = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const otp = await resetService.createOtp(user._id, email);
        const otpExpiryDuration = 300; // 300 seconds (5 minutes)
        return res.status(200).json({ 
            message: `OTP sent to your email address. The OTP will expire in ${otpExpiryDuration / 60} minutes.`
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const resetPassword = async (req, res) => {
    try {
        const { otp, newPassword } = req.body;
        const user = await resetService.resetPasswordWithOtp(otp, newPassword);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'Password reset successFull' });
    } catch (error) {
        if (error.message === 'Invalid or expired OTP') {
            return res.status(400).json({ message: 'The OTP has expired. Please request a new OTP.' });
        }
        return res.status(500).json({ message: error.message });
    }
};
const forgotPassword = async (req, res) => {
    try {
        const { otp, newPassword } = req.body;
        const user = await resetService.resetPasswordWithOtp(otp, newPassword);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'Password reset success' });
    } catch (error) {
        if (error.message === 'Invalid or expired OTP') {
            return res.status(400).json({ message: 'The OTP has expired. Please request a new OTP.' });
        }
        return res.status(500).json({ message: error.message });
    }
};


module.exports = {
    requestOtp,
    resetPassword,
    forgotPassword
};
