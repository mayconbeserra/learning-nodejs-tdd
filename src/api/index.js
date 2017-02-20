import repository from '../repositories/showsRepository';
import reportService from '../services/show';
import validate from '../middlewares/validation';

export default (app) => {
  app.get('/api/v1/shows', async (req, res) => {
    const list = await reportService({
      show: repository(),
    }).list();

    res.status(200).json(list);
  });

  app.get('/api/v1/shows/:id', async (req, res) => {
    const detail = await reportService({
      show: repository(),
    }).detail(req.params.id);

    if (!detail) res.status(404).end();

    res.status(200).json(detail);
  });

  app.post('/api/v1/shows', validate().showsPost, async (req, res) => {
    const newEntity = await reportService({
      show: repository(),
    }).create(req.body);

    if (!newEntity) res.status(400).end();

    res.status(201).json(newEntity[0]);
  });

  app.put('/api/v1/shows/:id', validate().showsPut, async (req, res) => {
    const result = await reportService({
      show: repository(),
    }).update(req.params.id, req.body);

    if (!result) res.status(400).end();

    res.status(200).json(result[0]);
  });

  app.delete('/api/v1/shows/:id', async (req, res) => {
    const show = await repository().getById(req.params.id);

    if (!show) res.status(404).end();

    await reportService({
      show: repository(),
    }).del(req.params.id);

    res.status(200).json(show);
  });
};
