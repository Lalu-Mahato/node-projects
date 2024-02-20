const httpStatus = require('http-status');

class AppError extends Error {
    constructor(message, code, status) {
        super();

        this.code = code || httpStatus.INTERNAL_SERVER_ERROR;
        this.status = status || httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
        this.message = message || 'Something went wrong';

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
