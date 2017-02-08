import ShowsRepository from '../repositories/showsRepository';

export default (app) => {
  app.get('/api/v1/shows', (req, res, next) => {
    console.log('api');
    const repository = new ShowsRepository();
    repository.getAll().then((shows) => {
      res.status(200).json(shows);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
  });
};
