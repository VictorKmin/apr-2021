const jwt = require('jsonwebtoken');
const util = require('util');

const { actionTokensEnum, variables } = require('../config');
const ErrorHandler = require('../errors/ErrorHandler');

const { ACCESS_SECRET_KEY, FORGOT_PASSWORD_SECRET_KEY, REFRESH_SECRET_KEY } = variables;

const verifyPromise = util.promisify(jwt.verify);

module.exports = {
    generateTokenPair: () => {
        const access_token = jwt.sign({}, ACCESS_SECRET_KEY, { expiresIn: '15m' });
        const refresh_token = jwt.sign({}, REFRESH_SECRET_KEY, { expiresIn: '31d' });

        return {
            access_token,
            refresh_token
        };
    },

    verifyToken: async (token, tokenType = 'access') => {
        try {
            const secret = tokenType === 'access' ? ACCESS_SECRET_KEY : REFRESH_SECRET_KEY;

            await verifyPromise(token, secret);
        } catch (e) {
            throw new ErrorHandler(401, 'Invalid token');
        }
    },

    generateActionToken: (actionType) => {
        const secretWord = _getSecretWordForActionToken(actionType);

        return jwt.sign({}, secretWord, { expiresIn: '7d' });
    },

    verifyActionToken: (token, actionType) => {
        const secretWord = _getSecretWordForActionToken(actionType);

        return jwt.verify(token, secretWord);
    }
};

function _getSecretWordForActionToken(actionType) {
    let secretWord = '';

    switch (actionType) {
        case actionTokensEnum.FORGOT_PASS:
            secretWord = FORGOT_PASSWORD_SECRET_KEY;
            break;
        case 'x2':
            secretWord = 'dasdasda';
            break;
        default:
            throw new ErrorHandler(500, 'Wrong token type');
    }

    return secretWord;
}
