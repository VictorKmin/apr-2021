const User = require('../dataBase/User');
const { hash } = require('../service/password.service');

module.exports = (async () => {
    const user = await User.findOne();

    if (!user) {
        const defaultAdmin = {
            name: 'Admin',
            email: 'admin@example.com',
            role: 'admin',
            password: await hash('12345')
        };

        await User.create(defaultAdmin);
    }
})();
