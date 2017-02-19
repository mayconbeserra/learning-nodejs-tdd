import { validatePost, validatePut } from './validateShows';

export default function () {
  return {
    showsPost: validatePost,
    showsPut: validatePut,
  };
}
