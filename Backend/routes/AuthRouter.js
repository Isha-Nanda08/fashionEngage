const { register, login, blog } = require('../Controllers/AuthController');
const { registerValidation, loginValidation, blogValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/register', registerValidation, register);
router.post('/writeBlog', blogValidation, blog);

module.exports = router;
