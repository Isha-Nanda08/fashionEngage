const { register, login, blog } = require('../Controllers/AuthController');
const { registerValidation, loginValidation, blogValidation } = require('../Middlewares/AuthValidation');
const multer = require('multer');
const path = require('path');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/register', registerValidation, register);
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
router.post('/writeBlog', blogValidation, blog);

module.exports = router;
