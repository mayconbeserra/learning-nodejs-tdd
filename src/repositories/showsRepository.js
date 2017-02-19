import knex from '../../db/knex';

export default function base () {
  return {
    getAll: getAll.bind(this),
    getById: getById.bind(this),
    insert: insert.bind(this),
    update: update.bind(this),
    delete: deleteShow.bind(this),
  };
}

const shows = () => {
  return knex('shows');
};

const getAll = () => {
  return shows().select();
};

const getById = (showId) => {
  return shows().where('id', parseInt(showId, 10)).first();
};

const insert = (show) => {
  return shows().insert(
    show,
    ['id', 'name', 'channel', 'genre', 'rating', 'explicit'],
  );
};

const update = (id, updates) => {
  return shows()
    .where('id', parseInt(id, 10))
    .update(updates, ['id', 'name', 'channel', 'genre', 'rating', 'explicit']);
};

const deleteShow = (id) => {
  return shows().where('id', parseInt(id, 10)).del();
};
