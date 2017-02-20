import val from '../middlewares/validation';
import * as show from './show';

export default (app) => {
  const baseUrl = '/api/v1/shows';

  app.get(baseUrl, async (req, res) => show.list(req, res));
  app.get(`${baseUrl}/:id`, async (req, res) => show.detail(req, res));
  app.put(`${baseUrl}/:id`, val().showsPut, async (req, res) => show.update(req, res));
  app.post(`${baseUrl}`, val().showsPost, async (req, res) => show.create(req, res));
  app.delete(`${baseUrl}/:id`, async (req, res) => show.del(req, res));
};
