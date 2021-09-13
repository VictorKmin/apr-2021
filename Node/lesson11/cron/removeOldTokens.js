const datJs = require('dayjs');
const utc = require('dayjs/plugin/utc');

datJs.extend(utc);

const OAuth = require('../dataBase/OAuth');
const ActionTokens = require('../dataBase/ActionTokens');

module.exports = async () => {
    const previousMonth = datJs.utc().subtract(1, 'month');

    const oauthDelete = await OAuth.deleteMany({ createdAt: { $lte: previousMonth } });
    const actionDelete = await ActionTokens.deleteMany({ createdAt: { $lte: previousMonth } });

    console.log(oauthDelete, 'oauthDelete');
    console.log(actionDelete, 'actionDelete');
};
