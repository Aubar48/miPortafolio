const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController')
/* ruta de usuario /users */
router.get('/', usersController.index);
router.get('/profile/:id', usersController.profile);
module.exports = router;
