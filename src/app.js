const express = require('express');
const UserController = require('./user/user.controller');

class App {
  constructor() {
    this.app = express();
    this.userController = new UserController();
  }

  setupMiddlewares() {
    this.app.use(express.json());
    this.app.use('/user', this.userController.setup());
  }

  run(port) {
    this.setupMiddlewares();

    this.app.listen(port, () => console.log(`Server is listening on port ${port}`));
  }
}

module.exports = App;
