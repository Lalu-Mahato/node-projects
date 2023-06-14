const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const JobSchema = new mongoose.Schema({
    title: { type: String },
    location: { type: String },
    salary: { type: String },
    user: { type: ObjectId, ref: 'User' },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model('Job', JobSchema);