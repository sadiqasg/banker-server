//apiTest.js
const request = require('supertest');
const app = require('../app');

//==================== user API test ====================

describe('GET /users', function () {
    it('respond with json containing a list of all users', function (done) {
      request(app)
        .get('/api/v1/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});

describe('GET /users/:id', () => {
  it('returns a single user', (done) => {
    request(app)
      .get('/api/v1/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

// Testing get a user endpoint by giving a non-existing user
describe('GET /user/:id', function () {
    it('respond with json user not found', function (done) {
        request(app)
            .get('/api/v1/users/100')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404) 
            .expect('{"status":404,"error":"User does not exist!"}')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

// Testing post user endpoint
// describe('POST /auth/signup', function () {
//     let data = {
//         "email": "example@mail.com",
//         "firstName": "test",
//         "lastName": "test",
//         "password": "test"
//     }
//     it('respond with 201 created', function (done) {
//         request(app)
//             .post('/api/v1/auth/signup')
//             .send(data)
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(201)
//             .end((err) => {
//                 if (err) return done(err);
//                 done();
//             });
//     });
// });

// Testing post duplicate user endpoint
describe('POST /auth/signup', function () {
    let data = {
        "email": "example@mail.com",
        "firstName": "test",
        "lastName": "test",
        "password": "test"
    }
    it('respond with user already exists', function (done) {
        request(app)
            .post('/api/v1/auth/signup')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

// Testing accounts
describe('GET /accounts', () => {
  it('returns all accounts', (done) => {
    request(app)
      .get('/api/v1/accounts')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})