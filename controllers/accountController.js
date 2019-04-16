const jwt = require('jsonwebtoken');
const fs = require('fs');

const accounts = require('../models/accounts.json');

class Accounts {
  static getAccounts(req, res) {
    try {
      return res.json({ status: 200, data: accounts });
    } catch (err) {
      return res.status(404).json({ status: 404, error: 'Accounts empty!' });
    }
  }
}

module.exports = Accounts;