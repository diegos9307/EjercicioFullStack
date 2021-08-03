const User = require('../models/user/user.model');
const bcrypt = require('bcrypt')


const getHome = (req,res) =>{
    res.render('index');
}

const createUserForm = (req,res) =>{
    res.render('register')
}

const createUser= async (req,res)=>{
    const {email, password, username} = req.body;
    try {
        const user = await new User ({name: username, email, password});
        await user.save();
        res.status(200).redirect('/login') 
    } catch (error) {
        console.log(error)
    }   
}


const loginUserForm = (req, res) => {
    res.render('login')
}

// flash messages
const loginUser = async (req,res)=>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email}); 

        if (user) {
            const response = await user.comparePassword(password);
            if (response) {
                req.session.userId = user._id;
                res.redirect('/tasks')
            }else{
                res.redirect('/login');  
            }
        } else {
            res.redirect('/register'); 
        }
    } catch (error) {
        console.error(error)
    }
}

const logoutUser = (req, res) => {
    req.session = null;
    res.redirect('/login');
};

module.exports = {
    getHome,
    createUser,
    loginUserForm,
    loginUser,
    createUserForm,
    logoutUser
}