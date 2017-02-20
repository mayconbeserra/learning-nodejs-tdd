import repository from '../repositories/showsRepository';
import reportService from '../services/show';

export async function list (req, res) {
  const data = await reportService({
    show: repository(),
  }).list();

  res.status(200).json(data);
}

export async function detail (req, res) {
  const data = await reportService({
    show: repository(),
  }).detail(req.params.id);

  if (!detail) res.status(404).end();

  res.status(200).json(data);
}

export async function create (req, res) {
  const newEntity = await reportService({
    show: repository(),
  }).create(req.body);

  if (!newEntity) res.status(400).end();

  res.status(201).json(newEntity[0]);
}

export async function update (req, res) {
  const result = await reportService({
    show: repository(),
  }).update(req.params.id, req.body);

  if (!result) res.status(400).end();

  res.status(200).json(result[0]);
}

export async function del (req, res) {
  const show = await repository().getById(req.params.id);

  if (!show) res.status(404).end();

  await reportService({
    show: repository(),
  }).del(req.params.id);

  res.status(200).json(show);
}
