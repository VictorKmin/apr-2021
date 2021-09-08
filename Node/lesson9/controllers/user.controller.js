const { emailActionsEnum } = require('../config');
const User = require('../dataBase/User');
const { emailService } = require('../service');
const { userNormalizator } = require('../utils/user.util');

module.exports = {
    getSingleUser: async (req, res, next) => {
        try {
            const userToReturn = userNormalizator(req.user);

            await emailService.sendMail(
                'victor.fzs10@gmail.com',
                emailActionsEnum.WELCOME,
                { userName: req.user.name }
            );

            res.json(userToReturn);
        } catch (e) {
            next(e);
        }
    },

    getAllUsers: async (req, res) => {
        const { perPage = 2, page = 1 } = req.query;
        const users = await User.find().limit(+perPage).skip((+perPage * (page - 1)));
        res.json(users);
    },

    createUser: async (req, res, next) => {
        try {
            // const { password } = req.body;
            //
            // const hashedPassword = await passwordService.hash(password);
            // const createdUser = await User.create({ ...req.body, password: hashedPassword });
            const createdUser = await User.createUserWithHashPassword(req.body);

            const userToReturn = userNormalizator(createdUser);

            res.json(userToReturn);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            // await User.deleteOne({ _id: user_id });
            await User.findOne({ _id: user_id });

            res.status(204).json(`User with id ${user_id} is deleted`);
        } catch (e) {
            next(e);
        }
    }
};
