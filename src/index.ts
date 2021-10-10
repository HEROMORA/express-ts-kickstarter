import 'colors';
import * as dotenv from 'dotenv';
import { createServer, Server } from 'http';

import app from './server';

// Setting Up Environment Variables
dotenv.config();

const port = process.env.PORT || 3000;

const server: Server = createServer(app);

server.on('listening', () => {
  console.log(`Listening on port: ${port}`.blue.underline.bold);
});

server.listen(port);
