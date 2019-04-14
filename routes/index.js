const express = require('express');
const User = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => res.json('Successful!, Welcome to API v1!'));

router.get('/users', User.getUsers);
router.get('/users/:id', User.getOneUser);
router.post('/auth/users', User.createUser);
router.patch('/users/:id', User.editUser);
router.delete('/users/:id', User.deleteUser);

router.post('/auth/signin', User.signIn);

router.use('*', (req, res) => res.json('Route does not exist'));


module.exports = router;
