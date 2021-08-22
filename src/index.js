const App = require('./app');

(function bootstrap() {
  const app = new App();

  app.run(8080);
})()
