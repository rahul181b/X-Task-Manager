const router = require('express').Router();
const {
    registerUser,
    loginUser,
    getCurrentUser
} = require('../Controllers/userController')


router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/current', getCurrentUser);

module.exports = router