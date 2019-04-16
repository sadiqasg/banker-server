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
  static getOneAccount(req, res) {
    const accountId = parseInt(req.params.id, 10);
    try {
      const accountItem = accounts.filter(account => account.id == accountId)[0];
      if (!accountItem) {
        return res.status(404).json({ status: 404, error: 'User does not exist!' });
      }
      return res.status(200).json({ status: 200, data: [accountItem] });
    } catch (err) {
      return res.status(500).json({ status: 500, error: 'Sorry about that, not available' });
    }
  }  
}

module.exports = Accounts;