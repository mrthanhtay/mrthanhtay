const mongoose = require('mongoose');
// const MONGO_URI = '';
async function connect() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('ket noi thanh cong');
    } catch (error) {
        console.log('Loi!!!!');
    }
}

module.exports = { connect };