import express from 'express';
import api from './api';

export async function application(config) {
  const app = express();

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
    console.log(config);
    app.listen(config.env.http.port, config.env.http.host, () => {
      console.log('listening'); /* eslint no-console:0 */
    });
  } catch (err) {
  }
}
