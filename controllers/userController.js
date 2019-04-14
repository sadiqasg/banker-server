const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const users = require('../models/users.json');

class Users {
  static getUsers(req, res) {
    try {
      return res.json({ status: 200, users });
    } catch (err) {
      return res.status(404).json({ status: 404, error: 'Users not found!' });
    }
  }

  static getOneUser(req, res) {
    const userId = parseInt(req.params.id, 10);
    try {
      const userItem = users.filter(user => user.userId == userId)[0];
      if (!userItem) {
        return res.status(404).json({ status: 404, error: 'User does not exist!' });
      }
      return res.status(200).json({ status: 200, data: [userItem] });
    } catch (err) {
      return res.status(500).json({ status: 500, error: 'Sorry about that, not available' });
    }
  }

  static createUser(req, res) {
    let hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = {
      userId: users.length + 1,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hash,
      type: 'user',
      isAdmin: false
    };
    users.push(newUser);
    res.status(201).json({ status: 201, data: [users[users.length - 1]] });
    // res.status(201).json({
    //   status: 201,
    //   data: [{
    //     token: 'token',
    //     id: users.length + 1,
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     email: req.body.email
    //   }]
    // })
  }

  static editUser(req, res) {
    try {
      const userId = parseInt(req.params.id, 10);
      const user = users.filter(item => item.userId == userId)[0];
      if (!user) {
        return res.status(404).json({ status: 404, error: 'user does not exist!' });
      }
      const index = users.indexOf(user);
      const keys = Object.keys(req.body);
      keys.forEach((key) => {
        user[key] = req.body[key];
      });
      users[index] = user;
      res.status(200).json({ status: 200, data: [users[index]] });
    } catch (err) {
      res.status(500).json({ status: 500, error: 'Sorry about that, not available' });
    }
  }

  static deleteUser(req, res) {
    try {
      const userId = parseInt(req.params.id, 10);
      const user = users.filter(item => item.userId == userId)[0];
      const index = users.indexOf(user);
      if (!user) {
        return res.status(404).json({ status: 404, error: 'User does not exist!' });
      }
      users.splice(index, 1);
      res.status(200).json({ status: 200, message: `The user with this id: ${userId} has been removed.` });
    } catch (err) {
      res.status(500).json({ status: 500, error: 'Sorry about that, not available' });
    }
  }

  // signin
  static signIn(req, res) {
    const user = {
      email: req.body.email,
      password: req.body.password
    }
    const userSearch = users.filter(u => u.email === user.email && u.password === user.password);
    
    if (userSearch.length === 0) {
      return res.send('invalid email or password');
    }
    jwt.sign({user},'SuperSecRetKey', { expiresIn: 60 * 60 }, (err, token) => {
        res.status(200).json({
          status: 200,
          data: [{
            token: token,
            id: userSearch[0].userId,
            firstName: userSearch[0].firstName,
            lastName: userSearch[0].lastName,
            email: userSearch[0].email
          }]
        })
    });
  }
}

module.exports = Users;
