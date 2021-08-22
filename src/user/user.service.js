const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const users = require('../db/users.json');

class UserService {
  constructor() {
    this.db = users;
  }

  login(email, password) {
    const user = this.db.find(u => u.email === email && u.password === password);

    if (user) {
      return {
        status: 200,
        payload: {
          ..._.omit(user, ['password']),
          token: jwt.sign({ id: user.id }, 'SECRET')
        },
      };
    } else {
      return { status: 400, payload: { message: "Wrong email/password"} };
    }
  }

  register(newUser) {
    const alreadyExist = this.db.find(u => u.email === newUser.email);

    if (alreadyExist) {
      return { status: 400, payload: { message: "User already exists" } };
    }

    newUser.id = uuidv4();
    this.db.push(newUser);

    return {
      status: 200,
      payload: {
        ..._.omit(newUser, ['password']),
        token: jwt.sign({ id: newUser.id }, 'SECRET')
      }
    };
  }
}

module.exports = UserService;
