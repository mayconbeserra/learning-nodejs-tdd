export default async function detail (repository, id) {
  return repository.show.getById(id);
}
