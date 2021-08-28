const User = require('../dataBase/User');
const ErrorHandler = require('../errors/ErrorHandler');
const userValidator = require('../validators/user.validator');

module.exports = {
    isUserPresent: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            // const user = await User.findById(user_id).select('_id email');
            // const user = await User.findById(user_id).select('-email -role');
            // const user = await User.findById(user_id).select('+password');
            const user = await User.findById(user_id);

            console.log('__________________________________________');
            console.log('__________________________________________');
            console.log(user);
            console.log('__________________________________________');
            console.log('__________________________________________');

            if (!user) {
                throw new ErrorHandler(418, 'user not found');
            }

            req.user = user;
            req.testParam = 'HELLO CHAT';

            next();
        } catch (e) {
            next(e);
        }
    },

    checkUniqueEmail: async (req, res, next) => {
        try {
            const { email } = req.body;

            const userByEmail = await User.findOne({ email });

            if (userByEmail) {
                throw new ErrorHandler(409, `Email ${email} is already exist`);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    validateUserBody: (req, res, next) => {
        try {
            const { error, value } = userValidator.createUserValidator.validate(req.body);

            console.log('___________________________');
            console.log(value);
            console.log('___________________________');

            if (error) {
                throw new ErrorHandler(400, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
