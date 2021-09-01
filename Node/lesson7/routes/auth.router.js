const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddlewares, userMiddlewares } = require('../middlewares');

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

module.exports = router;
