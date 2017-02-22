import { expect } from 'chai';
import sinon from 'sinon';
import ShowService from '../../../src/services/show';
import ShowsRepository from '../../../src/repositories/showsRepository';

describe('Testing --> Services.Shows', () => {
  describe('Detail', () => {
    it('should return a specified show', async () => {
      const repository = new ShowsRepository();
      sinon.stub(repository, 'getById', fakeShow);

      const result = await ShowService({ show: repository }).detail(1);
      const expected = fakeShow();

      expect(result).to.have.property('id', expected.id);
      expect(result).to.have.property('name', expected.name);
      expect(result).to.have.property('channel', expected.channel);
      expect(result).to.have.property('genre', expected.genre);
      expect(result).to.have.property('rating', expected.rating);
      expect(result).to.have.property('explicit', expected.explicit);
    });
  });

  describe('Create', () => {
    it('should create a new show', async () => {
      const repository = new ShowsRepository();
      sinon.stub(repository, 'insert', fakeShow);

      const result = await ShowService({ show: repository }).create(fakeShow);
      const expected = fakeShow();

      expect(result).to.have.property('id', expected.id);
      expect(result).to.have.property('name', expected.name);
      expect(result).to.have.property('channel', expected.channel);
      expect(result).to.have.property('genre', expected.genre);
      expect(result).to.have.property('rating', expected.rating);
      expect(result).to.have.property('explicit', expected.explicit);
    });
  });

  describe('Update', () => {
    it('should update an existing show', async () => {
      const repository = new ShowsRepository();
      sinon.stub(repository, 'update', fakeShow);

      const result = await ShowService({ show: repository }).update(1, fakeShow);
      const expected = fakeShow();

      expect(result).to.have.property('id', expected.id);
      expect(result).to.have.property('name', expected.name);
      expect(result).to.have.property('channel', expected.channel);
      expect(result).to.have.property('genre', expected.genre);
      expect(result).to.have.property('rating', expected.rating);
      expect(result).to.have.property('explicit', expected.explicit);
    });
  });

  describe('Delete', () => {
    it('should delete an existing show', async () => {
      const repository = new ShowsRepository();
      sinon.stub(repository, 'delete', fakeShow);

      const result = await ShowService({ show: repository }).del(1);
      const expected = fakeShow();

      expect(repository.delete.calledOnce).to.be.equals(true);
      expect(repository.delete.getCall(0).args[0]).to.be.equals(1);
      expect(result).to.have.property('id', expected.id);
      expect(result).to.have.property('name', expected.name);
      expect(result).to.have.property('channel', expected.channel);
      expect(result).to.have.property('genre', expected.genre);
      expect(result).to.have.property('rating', expected.rating);
      expect(result).to.have.property('explicit', expected.explicit);
    });
  });

  describe('List', () => {
    it('should list all shows', async () => {
      const repository = new ShowsRepository();
      sinon.stub(repository, 'getAll', fakeShows);

      const result = await ShowService({ show: repository }).list();
      let index = 0;
      result.forEach((element) => {
        const fakeShow = fakeShows()[index];
        Object.keys(fakeShows()[index]).forEach((key) => {
          expect(element).to.have.property(key, fakeShow[key]);
        });
        index += 1;
      });
    });
  });
});

const fakeShow = () => {
  return {
    id: 1,
    name: 'GoT',
    channel: 'HBO',
    genre: 'Serial Drama',
    rating: 10,
    explicit: true,
  };
};

const fakeShows = () => {
  return [
    {
      id: 1,
      name: 'GoT',
      channel: 'HBO',
      genre: 'Serial Drama',
      rating: 10,
      explicit: true,
    },
    {
      id: 2,
      name: 'Once upon a time',
      channel: 'ABC',
      genre: 'Fantasy',
      rating: 8,
      explicit: true,
    },
  ];
};
