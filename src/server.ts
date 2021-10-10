import express from 'express';

import dummiesRouter from './modules/dummy/routes';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.configMiddleware();
    this.mountRoutes();
  }

  private configMiddleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  private mountRoutes() {

    this.app.use('/dummies', dummiesRouter);

    this.app.get('/', (req, res, next) => {
      res.status(200).json({ message: 'hello, world!' });
    });
  }
}

const { app } = new Server();

export default app;
