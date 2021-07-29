const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/testDB'

mongoose.connect(process.env.MOGO_DB_URL || URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', () =>console.log('Error in db connection'));

mongoose.connection.once('open', () =>console.log('db connected')); 