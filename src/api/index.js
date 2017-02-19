import ShowsRepository from '../repositories/showsRepository';
import validate from '../middlewares/validation';

export default (app) => {
  app.get('/api/v1/shows', async (req, res) => {
    const repository = new ShowsRepository();
    res
      .status(200)
      .send(
        await repository.getAll(),
      );
  });

  app.get('/api/v1/shows/:id', async (req, res) => {
    const repository = new ShowsRepository();
    res
      .status(200)
      .send(
        await repository.getById(req.params.id),
      );
  });

  app.post('/api/v1/shows', validate().showsPost, async (req, res) => {
    const repository = new ShowsRepository();
    const result = await repository.insert(req.body);

    return result[0] !== null ?
      res.status(201).json(result[0]) :
      res.status(400);
  });

  app.put('/api/v1/shows/:id', validate().showsPut, async (req, res) => {
    const repository = new ShowsRepository();
    const result = await repository.update(req.params.id, req.body);

    return result[0] !== null ?
      res.status(200).json(result[0]) :
      res.status(400);
  });

  app.delete('/api/v1/shows/:id', async (req, res) => {
    const repository = new ShowsRepository();
    const show = await repository.getById(req.params.id);

    if (!show) res.status(404).end();

    await repository.delete(req.params.id);

    res.status(200).json(show);
  });
};
