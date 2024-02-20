const CommonMethod = require('@common-methods');
const bank = require('./action/bank');

exports.trackerReport = async () => {
    const response = await bank.findAll();

    return CommonMethod.successResponse(response);
};
