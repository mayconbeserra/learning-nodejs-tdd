import 'babel-polyfill';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import config from '../../config';
import { application } from '../../src/app';

chai.use(chaiHttp);
let server;

describe('Shows', () => {
  before(async () => {
    server = await application(config);
  });

  describe('GET', () => {
    it('should return a list of shows', (done) => {
      chai.request(server)
        .get('/api/v1/shows')
        .end(async (err, res) => {
          if (err) return done(err);

          expect(res).to.have.status(200);
          return done();
        });
    });
  });
});
