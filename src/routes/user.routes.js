const router = require('express').Router();
const { getHome, createUser, createUserForm , loginUser, loginUserForm, logoutUser } = require('../controllers/user.controller');
const loginValidator = require('../middlewars/validator.middlewars');
const validatorSchema = require('../validators/login.validators');

router.get('/', getHome );

router.get('/register', createUserForm);
router.post('/register', createUser);

router.get('/login', loginUserForm);
router.post('/login', loginUser);

router.get('/logout', logoutUser)


module.exports = router;