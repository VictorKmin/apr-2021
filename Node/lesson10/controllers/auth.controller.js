const ActionTokens = require('../dataBase/ActionTokens');
const OAuth = require('../dataBase/OAuth');
const User = require('../dataBase/User');
const {
    constants: { AUTHORIZATION },
    actionTokensEnum,
    emailActionsEnum,
    variables
} = require('../config');
const { jwtService, passwordService, emailService } = require('../service');
const { userNormalizator } = require('../utils/user.util');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const { user, body: { password } } = req;

            user.method();
            User.testStaic();

            // await passwordService.compare(user.password, password);

            await user.comparePassword(password);

            const tokenPair = jwtService.generateTokenPair();

            await OAuth.create({ ...tokenPair, user: user._id });

            res.json({
                ...tokenPair,
                user: userNormalizator(user)
            });
        } catch (e) {
            next(e);
        }
    },

    logoutUser: async (req, res, next) => {
        try {
            const access_token = req.get(AUTHORIZATION);

            await OAuth.deleteOne({ access_token });

            res.json('OK');
        } catch (e) {
            next(e);
        }
    },

    refresh: async (req, res, next) => {
        try {
            const refresh_token = req.get(AUTHORIZATION);
            const user = req.loginUser;

            await OAuth.deleteOne({ refresh_token });

            const tokenPair = jwtService.generateTokenPair();

            await OAuth.create({ ...tokenPair, user: user._id });

            res.json({
                ...tokenPair,
                user: userNormalizator(user)
            });
        } catch (e) {
            next(e);
        }
    },

    sendEmailForgotPassword: async (req, res, next) => {
        try {
            const { user } = req;

            const actionToken = jwtService.generateActionToken(actionTokensEnum.FORGOT_PASS);

            await ActionTokens.create({ token: actionToken, user: user._id });

            await emailService.sendMail(
                'victor.fzs10@gmail.com', // user.email
                emailActionsEnum.FORGOT_PASSWORD,
                { userName: user.name, forgotPasswordURL: `${variables.FRONTEND_URL}/password?token=${actionToken}` }
            );

            res.json('OK');
        } catch (e) {
            next(e);
        }
    },

    setNewForgotPassword: async (req, res, next) => {
        try {
            const {
                loginUser: { _id },
                body: { password }
            } = req;
            const token = req.get(AUTHORIZATION);

            const hashPassword = await passwordService.hash(password);

            await User.findByIdAndUpdate(_id, { password: hashPassword });
            await ActionTokens.deleteOne({ token });
            await OAuth.deleteMany({ user: _id });

            res.json('OK');
        } catch (e) {
            next(e);
        }
    }
};
