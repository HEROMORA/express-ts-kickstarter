import express from 'express';


class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.mountRoutes();
  }

  private configMiddleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  private mountRoutes() {
    this.app.get('/', (req, res, next) => {
      res.status(200).json({ message: 'hello, world!' });
    });
  }
}

const { app } = new Server();

export default app;
