const express = require('express');
const Party = require('../controllers/partyController');
const User = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => res.json('Successful!, Welcome to API v1!'));

router.get('/users', User.getUsers);
router.get('/users/:id', User.getOneUser);
router.post('/users', User.createUser);
router.patch('/users/:id', User.editUser);
router.delete('/users/:id', User.deleteUser);

router.use('*', (req, res) => res.json('Route does not exist'));


module.exports = router;
