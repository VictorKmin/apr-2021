const { AUTHORIZATION } = require('../config/constants');
const ErrorHandler = require('../errors/ErrorHandler');
const { verifyToken } = require('../service/jwt.service');
const OAuth = require('../dataBase/OAuth');

module.exports = {
    validateAccessToken: async (req, res, next) => {
        try {
            const access_token = req.get(AUTHORIZATION);

            if (!access_token) {
                throw new ErrorHandler(401, 'No token');
            }

            await verifyToken(access_token);

            const tokenFromDB = await OAuth.findOne({ access_token }).populate('user');

            console.log('________________________________________');
            console.log(tokenFromDB);
            console.log('________________________________________');

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

            const tokenFromDB = await OAuth.findOne({ refresh_token }).populate('user');

            console.log('________________________________________');
            console.log(tokenFromDB);
            console.log('________________________________________');

            if (!tokenFromDB) {
                throw new ErrorHandler(401, 'Not valid token 111');
            }

            req.loginUser = tokenFromDB.user;

            next();
        } catch (e) {
            next(e);
        }
    },
};
