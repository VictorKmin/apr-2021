module.exports = {
    PORT: process.env.PORT || 5000,
    DB_CONNECT_URL: process.env.DB_CONNECT_URL || 'mongodb://localhost:27017/apr-2021',

    ACCESS_SECRET_KEY: process.env.ACCESS_SECRET_KEY || 'Secret',
    REFRESH_SECRET_KEY: process.env.REFRESH_SECRET_KEY || 'S_2',
    FORGOT_PASSWORD_SECRET_KEY: process.env.FORGOT_PASSWORD_SECRET_KEY || 'secretForgot',

    NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || 'test@example.com',
    NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD || '1235',

    FRONTEND_URL: process.env.FRONTEND_URL || 'https://stackoverflow.com'
};
