const User = require('../dataBase/User');
const ErrorHandler = require('../errors/ErrorHandler');
const userValidator = require('../validators/user.validator');

module.exports = {
    throwIfUserNotPresent: (req, res, next) => {
        try {
            const { user } = req;

            if (!user) {
                throw new ErrorHandler(404, 'user not found');
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    throwIfUserPresent: (req, res, next) => {
        try {
            const { user } = req;

            if (user) {
                throw new ErrorHandler(409, 'User already exist');
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

            const user = await User.findOne({ [dbFiled]: value });

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    // Секретна розробка КГБ
    test: (throwHwenExist = false) => (req, res, next) => {
        try {
            const { user } = req;

            if (user && throwHwenExist) {
                return next(new ErrorHandler(409, 'Conflicat'));
            }

            if (!user && !throwHwenExist) {
                return next(new ErrorHandler(404, 'NotFound'));
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
