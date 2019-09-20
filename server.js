import express from 'express';
import logger from 'morgan';
import 'regenerator-runtime/runtime';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import Debug from 'debug';
import { config } from 'dotenv';

import Route from './server/routes/routes';
import options from './docs/swagger';

config();

const app = express();

app.use(logger('dev'));
const debug = Debug('http');
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}))

app.get('/api/v1', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to sales management API'
  })
})

const router = express.Router();
app.use('/api/v1', Route(logger, router));

const swaggerSpec = swaggerJSDoc(options);
app.use('/api/v1/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(port, () => debug(`Server listening on port ${port}`));

export default app;