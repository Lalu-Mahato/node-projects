const models = require('@models');

exports.findAll = () => models.bank.findAll({
    raw: true,
});
