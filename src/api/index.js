import val from '../middlewares/validation';
import * as show from './show';

const wrapRoute = (fn) => {
  return function (...args) {
    return fn.apply(null, args) // eslint-disable-line
      .catch(args[2]); // call next()
  };
};

export default (app) => {
  const baseUrl = '/api/v1/shows';
  app.get('/api/v1/shows', wrapRoute(show.list));
  app.get(`${baseUrl}/:id`, wrapRoute(show.detail));
  app.put(`${baseUrl}/:id`, val().showsPut, wrapRoute(show.update));
  app.post(`${baseUrl}`, val().showsPost, wrapRoute(show.create));
  app.delete(`${baseUrl}/:id`, wrapRoute(show.del));
  app.get('/_ping', (req, res) => {
    res.status(200).end();
  });

  app.use((req, res) => {
    res.status(404).end();
  });
};
