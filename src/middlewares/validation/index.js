import validateShows from './validateShows';

export default function () {
  return {
    showsPost: validateShows,
  };
}
