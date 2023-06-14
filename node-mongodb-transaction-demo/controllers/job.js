const Job = require('../models/job');
const User = require('../models/user');
const mongoose = require('mongoose');
const connection = mongoose.connection;



const create = async (req, res) => {
    try {
        const { email, title, location, salary } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.send(404, 'User not found.');
        }

        const session = await connection.startSession();
        await session.startTransaction();

        const job = await Job.create([{
            title,
            location,
            salary,
            user: user._id
        }], { session });

        await User.findByIdAndUpdate(user._id,
            { $addToSet: { jobs: job[0]._id } }, { session }
        );

        await session.commitTransaction();

        return res.send({ data: job });
    } catch (err) {
        console.log(err);
    }
}

const findAll = async (req, res) => {
    try {
        const jobs = await Job.find({})
            .sort({ createdAt: -1 })
            .populate('user', 'name email');
        return res.send({ data: jobs });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    create,
    findAll,
};
