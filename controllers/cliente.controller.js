const Cliente = require('../models/Cliente.model');

module.exports.list = (req, res, next) => {
  Cliente.find()
    .then((clientes) => {
      res.json(clientes);
    })
    .catch(next);
};
module.exports.detail = (req, res, next) => {
  const { id } = req.params;
  Cliente.findById(id)
    .then((cliente) => {
      res.json(cliente);
    })
    .catch(next);
};
module.exports.create = (req, res, next) => {
  Cliente.create(req.body)
    .then((cliente) => res.status(201).json(cliente))
    .catch(next);
};
module.exports.update = (req, res, next) => {
  const { id } = req.body;
  Cliente.findOneAndUpdate(id, req.body, { new: true, rawResult: true })
    .then((cliente) => {
      res.status(200).json(cliente);
    })
    .catch(next);
};
module.exports.delete = (req, res, next) => {
  console.log(req.body);
  const { id } = req.body;
  Cliente.findByIdAndDelete(id)
    .then(() => res.status(204))
    .catch(next);
};
