import 'babel-polyfill';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import config from '../../config';
import { application } from '../../src/app';
import knex from '../../db/knex';

chai.use(chaiHttp);
let server;
const baseUrl = '/api/v1/shows';

describe(`Testing --> ${baseUrl}`, () => {
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
        .get(baseUrl)
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
        .get(`${baseUrl}/1`)
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
        .post(baseUrl)
        .send({
          name: 'GoT',
          channel: 'HBO',
          genre: 'Serial Drama',
          rating: 10,
          explicit: true,
        })
        .end(async (err, res) => {
          if (err) return done(err);

          expect(res).to.have.status(200);
          expect(res.body).to.have.property('id');
          expect(res.body).to.have.property('channel', 'HBO');
          expect(res.body).to.have.property('genre', 'Serial Drama');
          expect(res.body).to.have.property('rating', 10);
          expect(res.body).to.have.property('explicit', true);

          return done();
        });
    });

    it('should return a bad request when the body is empty', (done) => {
      chai.request(server)
        .post(baseUrl)
        .send({ })
        .end(async (err, res) => {
          expect(res).to.have.status(400);
          return done();
        });
    });
  });

  describe('PUT', () => {
    it('should update the show', (done) => {
      const payload = {
        name: 'GoT',
        channel: 'HBO',
        genre: 'Serial Drama',
        rating: 10,
        explicit: true,
      };

      chai.request(server)
        .post(baseUrl)
        .send(payload)
        .end(async (er, re) => {
          chai.request(server)
            .put(`${baseUrl}/${re.body.id}`)
            .send(payload)
            .end(async (err, res) => {
              if (err) return done(err);

              expect(res).to.have.status(200);
              expect(res.body).to.have.property('id');
              expect(res.body).to.have.property('channel', 'HBO');
              expect(res.body).to.have.property('genre', 'Serial Drama');
              expect(res.body).to.have.property('rating', 10);
              expect(res.body).to.have.property('explicit', true);

              return done();
            });
        });
    });

    it('should return a bad request when the body is empty', (done) => {
      chai.request(server)
        .put(`${baseUrl}/9999`)
        .send({ })
        .end(async (err, res) => {
          expect(res).to.have.status(400);
          return done();
        });
    });

    it('should return a bad request when the id is part of the body', (done) => {
      chai.request(server)
        .put(`${baseUrl}/9999`)
        .send({ id: 999, name: 'name' })
        .end(async (err, res) => {
          expect(res).to.have.status(400);
          return done();
        });
    });

    it('should return a bad request when the id is NOT an integer', (done) => {
      chai.request(server)
        .put(`${baseUrl}/abc`)
        .send({ name: 'name' })
        .end(async (err, res) => {
          expect(res).to.have.status(400);
          return done();
        });
    });
  });

  describe('DELETE', () => {
    it('should delete an existing show', (done) => {
      chai.request(server)
        .post(baseUrl)
        .send({
          name: 'GoT',
          channel: 'HBO',
          genre: 'Serial Drama',
          rating: 10,
          explicit: true,
        })
        .end(async (err, res) => {
          expect(res).to.have.status(200);
          chai.request(server)
            .delete(`${baseUrl}/${res.body.id}`)
            .end(async (er, re) => {
              expect(re).to.have.status(200);
              return done();
            });
        });
    });

    it('should return a bad request when the body is empty', (done) => {
      chai.request(server)
        .post(baseUrl)
        .send({ })
        .end(async (err, res) => {
          expect(res).to.have.status(400);
          return done();
        });
    });
  });
});
