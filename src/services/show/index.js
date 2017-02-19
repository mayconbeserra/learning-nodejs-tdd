import detail from './detail';
import create from './create';
import list from './list';

export default function (repository) {
  return {
    list: list.bind(this, repository),
    detail: detail.bind(this, repository),
    create: create.bind(this, repository),
  };
}
