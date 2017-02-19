export default async function create (repository, payload) {
  return repository.show.insert(payload);
}
