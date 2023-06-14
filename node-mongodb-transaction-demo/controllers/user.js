const User = require('../models/user');

const create = async (req, res) => {
    try {
        const user = await User.create({ ...req.body });
        return res.send({ data: user });
    } catch (err) {
        console.log(err);
    }
}

const findAll = async (req, res) => {
    try {
        const users = await User.find({})
            .populate('jobs', 'title location salary');
        return res.send({ data: users });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    create,
    findAll,
};
