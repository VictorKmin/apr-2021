module.exports = {
    userNormalizator: (userToNormalize) => {
        const fileldsToRemove = [
            'password',
            '__v'
        ];

        userToNormalize = userToNormalize.toObject();

        fileldsToRemove.forEach((field) => {
            delete userToNormalize[field];
        });

        return userToNormalize;
    }
};
