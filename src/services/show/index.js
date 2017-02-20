import list from './list';
import detail from './detail';
import create from './create';
import update from './update';
import del from './delete';

export default function (repository) {
  return {
    del: del.bind(this, repository),
    list: list.bind(this, repository),
    detail: detail.bind(this, repository),
    create: create.bind(this, repository),
    update: update.bind(this, repository),
  };
}
