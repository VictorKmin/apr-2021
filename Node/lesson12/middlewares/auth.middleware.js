const { AUTHORIZATION } = require('../config/constants');
const ErrorHandler = require('../errors/ErrorHandler');
const { verifyToken, verifyActionToken } = require('../service/jwt.service');
const OAuth = require('../dataBase/OAuth');
const ActionTokens = require('../dataBase/ActionTokens');

module.exports = {
    validateAccessToken: async (req, res, next) => {
        try {
            const access_token = req.get(AUTHORIZATION);

            if (!access_token) {
                throw new ErrorHandler(401, 'No token');
            }

            await verifyToken(access_token);

            const tokenFromDB = await OAuth.findOne({ access_token });

            if (!tokenFromDB) {
                throw new ErrorHandler(401, 'Not valid token 111');
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    validateRefreshToken: async (req, res, next) => {
        try {
            const refresh_token = req.get(AUTHORIZATION);

            if (!refresh_token) {
                throw new ErrorHandler(401, 'No token');
            }

            await verifyToken(refresh_token, 'refresh');

            const tokenFromDB = await OAuth.findOne({ refresh_token });

            if (!tokenFromDB) {
                throw new ErrorHandler(401, 'Not valid token 111');
            }

            req.loginUser = tokenFromDB.user;

            next();
        } catch (e) {
            next(e);
        }
    },

    validateActionToken: (tokenType) => async (req, res, next) => {
        try {
            const actionToken = req.get(AUTHORIZATION);

            if (!actionToken) {
                throw new ErrorHandler(401, 'No token');
            }

            await verifyActionToken(actionToken, tokenType);

            const tokenFromDB = await ActionTokens.findOne({ token: actionToken });

            if (!tokenFromDB) {
                throw new ErrorHandler(401, 'Not valid token');
            }

            req.loginUser = tokenFromDB.user;

            next();
        } catch (e) {
            next(e);
        }
    },
};
