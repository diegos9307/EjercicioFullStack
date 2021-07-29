const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    registeredAt: {
        type: Date,
        default: Date.now()
    }
});

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt); 
    this.password = hash
    next() 
})

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


module.exports = mongoose.model('users', UserSchema);


// task schema

/*
const taskSchema = new Schema ({
    task : {
        type: String,
        required : true,
    },
    taskDescription : String,

    taskDate : {
        type: Date,
        required : true,
    },

    registeredAt: {
        type: Date,
        default: Date.now()
    }    
})

module.exports = mongoose.model('task', taskSchema);

*/