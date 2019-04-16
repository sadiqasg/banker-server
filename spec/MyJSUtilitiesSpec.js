let accounts = require('../controllers/accountController');
let users = require('../controllers/userController');


describe("Accounts", () => {
  describe("/GET", () => {
    it("should get all accounts", () => {
      expect(accounts.getAccounts).toBeDefined();
    })
  })
});

describe("Users", () => {
  describe("/GET users", () => {
    it('should return all users', () => {
      expect(users.getUsers).toBeDefined();
    });
    it('should return one user', () => {
      expect(users.getOneUser).toBeDefined();
    });
  });
  describe("/POST users", () => {
    it('should create users', () => {
      expect(users.createUser).toBeDefined();
    })
  });
  describe("/PATCH users/:id", () => {
    it('should edit users', () => {
      expect(users.editUser).toBeUndefined();
    })
  });
  describe("/DELETE users/:id", () => {
    it('should create users', () => {
      expect(users.deleteUser).toBeUndefined();
    })
  });
})