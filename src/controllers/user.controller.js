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

const loginUser = async (req,res)=>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email}); 

        if (user) {
            const response = await user.comparePassword(password);
            if (response) {
                req.session.userID =user._id;
                res.redirect('/profile')
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


module.exports = {
    getHome,
    createUser,
    loginUserForm,
    loginUser,
    createUserForm
}