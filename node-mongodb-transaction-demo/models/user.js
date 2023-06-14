const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    jobs: [{ type: ObjectId, ref: 'Job' }],
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
