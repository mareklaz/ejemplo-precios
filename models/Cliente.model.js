const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
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

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;
