import ShowsRepository from '../repositories/showsRepository';
import validate from '../middlewares/validation';

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

  app.post('/api/v1/shows', validate().showsPost, (req, res, next) => {
    const repository = new ShowsRepository();

    repository.insert(req.body)
      .then((show) => {
        res.status(200).json(show[0]);
      })
      .catch((err) => {
        next(err);
      });
  });

  app.put('/api/v1/shows/:id', validate().showsPut, (req, res, next) => {
    const repository = new ShowsRepository();

    repository.update(req.params.id, req.body)
      .then((show) => {
        res.status(200).json(show[0]);
      })
      .catch((err) => {
        next(err);
      });
  });

  app.delete('/api/v1/shows/:id', (req, res, next) => {
    const repository = new ShowsRepository();

    repository.delete(req.params.id)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        next(err);
      });
  });
};
