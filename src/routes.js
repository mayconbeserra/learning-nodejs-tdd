export default (app) => {
  app.get('/api/v1/shows', (req, res) => {
    res.status(200).end();
  });
};
