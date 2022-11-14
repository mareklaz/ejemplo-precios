const router = require('express').Router();
const clienteController = require('../controllers/cliente.controller');
const productoController = require('../controllers/producto.controller');
const descuentoController = require('../controllers/descuento.controller');

router.get('/', (req, res, next) => {
  res.json({ ok: true });
});

// Clientes
router.get('/clientes', clienteController.list);
router.get('/clientes/:id', clienteController.detail);
router.post('/clientes/create', clienteController.create);
router.put('/clientes/update', clienteController.update);
router.delete('/clientes/delete', clienteController.delete);

// Descuento

// Productos

module.exports = router;
