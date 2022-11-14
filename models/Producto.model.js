const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    precio: {
      type: String,
    },
    descuento: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Descuento',
    },
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.__v;
        delete ret._id;
        return ret;
      },
    },
  }
);

const Producto = mongoose.model('Producto', ProductoSchema);

module.exports = Producto;
