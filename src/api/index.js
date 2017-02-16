import ShowsRepository from '../repositories/showsRepository';

export default (app) => {
  app.get('/api/v1/shows', (req, res, next) => {
    const repository = new ShowsRepository();
    repository.getAll().then((shows) => {
      res.status(200).json(shows);
    })
    .catch((err) => {
      next(err);
    });
  });

  app.get('/api/v1/shows/:id', (req, res, next) => {
    const repository = new ShowsRepository();
    repository.getById(req.params.id).then((show) => {
      res.status(200).json(show);
    })
    .catch((err) => {
      next(err);
    });
  });

  app.post('/api/v1/shows', (req, res, next) => {
    const repository = new ShowsRepository();
    repository.insert(req.body)
      .then((showId) => {
        res.status(200).json({ id: showId });
      })
      .catch((err) => {
        next(err);
      });
  });
};
