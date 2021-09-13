const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddlewares, userMiddlewares } = require('../middlewares');
const { actionTokensEnum } = require('../config');

router.post(
    '/',
    userMiddlewares.getUserByDynamicParam('email'),
    userMiddlewares.throwIfUserNotPresent,
    authController.loginUser
);

router.post(
    '/logout',
    authMiddlewares.validateAccessToken,
    authController.logoutUser
);

router.post(
    '/refresh',
    authMiddlewares.validateRefreshToken,
    authController.refresh
);

router.post(
    '/password/forgot/send',
    userMiddlewares.getUserByDynamicParam('email'),
    userMiddlewares.throwIfUserNotPresent,
    authController.sendEmailForgotPassword
);

router.post(
    '/password/forgot/set',
    userMiddlewares.validateNewPassword,
    authMiddlewares.validateActionToken(actionTokensEnum.FORGOT_PASS),
    authController.setNewForgotPassword
);

module.exports = router;
