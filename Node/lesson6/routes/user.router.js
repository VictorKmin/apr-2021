const router = require('express').Router();

const { userController } = require('../controllers');
const {
    isUserPresent,
    checkUniqueEmail,
    validateUserBody,
    checkUserRoleMiddleware,
    getUserByDynamicParam
} = require('../middlewares/user.middleware');

router.post(
    '/',
    validateUserBody,
    getUserByDynamicParam('email', 'body'),
    checkUniqueEmail,
    userController.createUser
);
router.get('/', userController.getAllUsers);
router.get(
    '/:user_id',
    getUserByDynamicParam('user_id', 'params', '_id'),
    userController.getSingleUser
);
router.delete(
    '/:user_id',
    isUserPresent,
    checkUserRoleMiddleware(['admin']),
    userController.deleteUser
);

module.exports = router;
