const { Router } = require('express');
const _ = require('lodash');
const UserService = require('./user.service');

class UserController {
  constructor() {
    this.userService = new UserService();
    this.router = Router();
  }

  login = (req, res) => {
    const result = this.userService.login(req.body.email, req.body.password);

    if (result.status === 200) {
      res.setHeader('Authorization', `Bearer ${result.payload.token}`);
    }

    res.status(result.status).send(_.omit(result.payload, ['token']));
  }

  register = (req, res) => {
    const result = this.userService.register(req.body);

    if (result.status === 200) {
      res.setHeader('Authorization', `Bearer ${result.payload.token}`);
    }

    res.status(result.status).send(_.omit(result.payload, ['token']));
  }

  setup() {
    this.router.post('/login', this.login);
    this.router.post('/register', this.register);

    return this.router;
  }
}

module.exports = UserController;
