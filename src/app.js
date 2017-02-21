import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import api from './api';

export async function application(config) {
  const app = express();

  app.use(bodyParser.json());
  app.use(expressValidator());
  api(app);

  app.use((err, req, res, next) => { // eslint-disable-line consistent-return,no-unused-vars
    if (err) {
      return res.sendStatus(500);
    }
  });

  return app;
}

export async function start (config) {
  try {
    const app = await application(config);
    console.log('## Debugging 2 ### ');
    app.listen(config.env.http.port, config.env.http.host, () => {
      console.log(`listening on ${config.env.http.host}:${config.env.http.port}`); /* eslint no-console:0 */
    });
  } catch (err) {
    console.log(`A critical error happened: ${err}`);
  }
}
