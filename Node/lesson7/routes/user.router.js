const router = require('express').Router();

const { userController } = require('../controllers');
const { authMiddlewares } = require('../middlewares');
const {
    throwIfUserNotPresent,
    validateUserBody,
    getUserByDynamicParam,
    test
} = require('../middlewares/user.middleware');

router.post(
    '/',
    validateUserBody,
    getUserByDynamicParam('email'),
    // throwIfUserPresent,
    test(true),
    userController.createUser
);

router.get('/', userController.getAllUsers);

router.get(
    '/:user_id',
    getUserByDynamicParam('user_id', 'params', '_id'),
    test(),
    userController.getSingleUser
);
router.delete(
    '/:user_id',
    authMiddlewares.validateAccessToken,
    getUserByDynamicParam('user_id', 'params', '_id'),

    throwIfUserNotPresent,
    userController.deleteUser
);

module.exports = router;
