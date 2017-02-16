import 'babel-polyfill';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import config from '../../config';
import { application } from '../../src/app';
import knex from '../../db/knex';

chai.use(chaiHttp);
let server;

describe('api/v1/shows', () => {
  before(async () => {
    server = await application(config);
  });

  beforeEach((done) => {
    knex.migrate.rollback()
      .then(() => {
        knex.migrate.latest()
          .then(() => {
            return knex.seed.run()
              .then(() => {
                done();
              });
          });
      });
  });

  afterEach((done) => {
    knex.migrate.rollback()
      .then(() => {
        done();
      });
  });

  describe('GET', () => {
    it('should return a list of shows', (done) => {
      chai.request(server)
        .get('/api/v1/shows')
        .end(async (err, res) => {
          if (err) return done(err);

          expect(res).to.have.status(200);
          expect(res.body[0]).to.have.property('id');
          expect(res.body[0]).to.have.property('name');
          expect(res.body[0]).to.have.property('channel');
          expect(res.body[0]).to.have.property('genre');
          expect(res.body[0]).to.have.property('rating');
          expect(res.body[0]).to.have.property('explicit');
          return done();
        });
    });

    it('should return a single record', (done) => {
      chai.request(server)
        .get('/api/v1/shows/1')
        .end(async (err, res) => {
          if (err) return done(err);

          expect(res).to.have.status(200);
          expect(res.body).to.have.property('id');
          expect(res.body).to.have.property('name');
          expect(res.body).to.have.property('channel');
          expect(res.body).to.have.property('genre');
          expect(res.body).to.have.property('rating');
          expect(res.body).to.have.property('explicit');
          return done();
        });
    });
  });

  describe('POST', () => {
    it('should add a new show', (done) => {
      chai.request(server)
        .post('/api/v1/shows')
        .send({
          name: 'GoT',
          channel: 'HBO',
          genre: '',
          rating: 10,
          explicit: true,
        })
        .end(async (err, res) => {
          if (err) return done(err);

          expect(res).to.have.status(200);
          expect(res.body).to.have.property('id');

          return done();
        });
    });
  });
});
