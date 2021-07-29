const router = require('express').Router();
const { getHome, createUser, createUserForm , loginUser, loginUserForm } = require('../controllers/user.controller');

router.get('/', getHome );

router.get('/register', createUserForm);
router.post('/register', createUser);

router.get('/login', loginUserForm);
router.post('/login', loginUser);


module.exports = router;