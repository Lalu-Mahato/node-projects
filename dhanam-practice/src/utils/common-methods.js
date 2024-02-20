/* eslint-disable import/no-extraneous-dependencies */
const httpStatus = require('http-status');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');

class CommonMethods {
    static successResponse(data, pagination) {
        return {
            code: httpStatus.OK,
            status: 'Success',
            data,
            pagination,
        };
    }

    static createdResponse(data, message) {
        return {
            code: httpStatus.CREATED,
            status: httpStatus[httpStatus.CREATED],
            data,
            message,
        };
    }

    static deletedResponse(message) {
        return {
            status: httpStatus.NO_CONTENT,
            message,
        };
    }

    static notFoundResponse(message) {
        return {
            code: httpStatus.NOT_FOUND,
            status: httpStatus[httpStatus.NOT_FOUND],
            message,
        };
    }

    static errorResponse(status, message) {
        return {
            code: status || httpStatus.BAD_REQUEST,
            status: httpStatus[status] || httpStatus[httpStatus.BAD_REQUEST],
            message,
        };
    }

    static conflictResponse(message) {
        return {
            code: httpStatus.CONFLICT,
            status: httpStatus[httpStatus.CONFLICT],
            message,
        };
    }

    static badResponse(message) {
        return {
            code: httpStatus.BAD_REQUEST,
            status: httpStatus[httpStatus.BAD_REQUEST],
            message,
        };
    }

    static unauthorizedResponse(message) {
        return {
            code: httpStatus.UNAUTHORIZED,
            status: httpStatus[httpStatus.UNAUTHORIZED],
            message,
        };
    }

    static noContentResponse() {
        return {
            code: httpStatus.NO_CONTENT,
            status: httpStatus[httpStatus.NO_CONTENT],
        };
    }

    static encryptPassword(password) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    static comparePassword(inputPWD, databasePWD) {
        return bcrypt.compare(inputPWD, databasePWD);
    }

    static generateAccessToken(
        payload,
        secretAccessKey = process.env.JWT_ACCESS_SECRET,
    ) {
        return jwt.sign(payload, secretAccessKey, {
            expiresIn: process.env.JWT_TOKEN_EXPIRES_IN,
        });
    }

    static generateRefreshToken(
        payload,
        secretRefreshKey = process.env.JWT_REFRESH_SECRET,
    ) {
        return jwt.sign(payload, secretRefreshKey);
    }

    static generateId() {
        const random = Math.floor(Math.random() * 1000);
        const milliseconds = random.toString().padStart(3, '0');

        const stringId = moment().format('YYYYMMDDhmmSSS') + milliseconds;
        return parseInt(stringId, 10);
    }
}

module.exports = CommonMethods;
