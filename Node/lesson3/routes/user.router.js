const router = require('express').Router();

const { userController } = require('../controllers');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers)
router.get('/:user_id', userController.getSingleUser)

module.exports = router;


















