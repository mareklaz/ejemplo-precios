const mongoose = require('mongoose');

const DescuentoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    valor: {
      type: Number,
    },
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cliente',
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

const Descuento = mongoose.model('Descuento', DescuentoSchema);

module.exports = Descuento;
