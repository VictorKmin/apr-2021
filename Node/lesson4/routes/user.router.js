const router = require('express').Router();

const { userController } = require('../controllers');
const { isUserPresent, checkUniqueEmail } = require('../middlewares/user.middleware');

router.post('/', checkUniqueEmail, userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:user_id', isUserPresent, userController.getSingleUser);
router.delete('/:user_id', isUserPresent, userController.deleteUser);

module.exports = router;
