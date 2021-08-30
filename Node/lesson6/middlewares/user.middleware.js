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
            console.log('**************************************');
            console.log(req.user);
            console.log('**************************************');

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

    checkUserRoleMiddleware: (rolesArr = []) => (req, res, next) => {
        try {
            const { role } = req.user;

            if (!rolesArr.length) {
                return next();
            }

            if (!rolesArr.includes(role)) {
                throw new ErrorHandler(403, 'Forbidden');
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    getUserByDynamicParam: (paramName, searchIn = 'body', dbFiled = paramName) => async (req, res, next) => {
        try {
            const value = req[searchIn][paramName];

            console.log('0000000000000000000000000000000000000000000000000000000000');
            console.log(value);
            console.log(paramName);
            console.log(dbFiled);
            console.log('0000000000000000000000000000000000000000000000000000000000');

            const user = await User.findOne({ [dbFiled]: value });

            if (!user) {
                throw new ErrorHandler(418, 'user not found');
            }

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    }
};
