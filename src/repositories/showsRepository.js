import knex from '../../db/knex';

export default function base () {
  console.log('repository');
  return {
    getAll: getAll.bind(this),
  };
}

const shows = () => {
  console.log('get shows');
  return knex('shows');
};

const getAll = () => {
  return shows().select();
};
