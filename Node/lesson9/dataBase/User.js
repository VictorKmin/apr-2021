const { Schema, model } = require('mongoose');

const userRolesEnum = require('../config/user-roles.enum');
const { USER } = require('../config/database-tables.enum');
const { passwordService } = require('../service');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        // select: false
    },
    role: {
        type: String,
        default: userRolesEnum.USER,
        enum: Object.values(userRolesEnum)
    }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userSchema.virtual('fullName').get(function() {
    return `${this.name}-Zelenskii`;
});

userSchema.methods = { // for single record // THIS - RECORD
    method() {
        console.log(this);
        console.log('USING MONGO METHOD');
    },

    comparePassword(password) {
        return passwordService.compare(this.password, password);
    }
};

userSchema.statics = { // for schema // THIS - SCHEMA
    testStaic() {
        console.log('(((((((((((((8*****************************');
        console.log('HELLO TEST STAIC');
        console.log('(((((((((((((8*****************************');
    },

    async createUserWithHashPassword(userObject) {
        const hashedPassword = await passwordService.hash(userObject.password);

        return this.create({ ...userObject, password: hashedPassword });
    }
};

module.exports = model(USER, userSchema);
