const express = require('express');
const router = express.Router();
const resetControllermail = require('../controllers/reset.controllermail');

router.post('/request-otp-mail', resetControllermail.requestOtp);
router.post('/reset-password-mail', resetControllermail.resetPassword);
router.post('/forgot-password-mail', resetControllermail.forgotPassword);

module.exports = router;
