const mongoose = require('mongoose');
const url = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log('DB connected...');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
