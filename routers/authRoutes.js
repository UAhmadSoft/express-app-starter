const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signUp', authController.signup);
router.post('/login', authController.login);

router
  .route('/confirmMail/:activationLink')
  .get(authController.confirmMail);
router.route('/forgotPassword').post(authController.forgotPassword);
router
  .route('/resetPassword/:resetToken')
  .patch(authController.resetPassword);

module.exports = router;
