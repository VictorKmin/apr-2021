const { emailActionsEnum } = require('../config');

module.exports = {
    [emailActionsEnum.WELCOME]: {
        templateName: 'welcome',
        subject: 'WELCOME !!!'
    },
    [emailActionsEnum.USER_BLOCKED_ADMIN]: {
        templateName: 'accountBlockedAdmin',
        subject: 'Oops you was blocked'
    },
    [emailActionsEnum.USER_BLOCKED_SOFT]: {
        templateName: 'accountBlockedSoft',
        subject: 'Oops you was blocked'
    },
    [emailActionsEnum.FORGOT_PASSWORD]: {
        templateName: 'forgot_password',
        subject: 'Dont worry, be happy'
    },
};
