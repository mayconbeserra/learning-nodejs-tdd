export default async function update (repository, id, data) {
  return repository.show.update(id, data);
}
