export default async function del (repository, id) {
  return repository.show.delete(id);
}
