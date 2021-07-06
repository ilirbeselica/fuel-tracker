const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema(
  {
    data: { type: Date, required: true },
    tabela: { type: String, required: true },
    pompa: { type: String, required: true },
    personi: { type: String, required: true },
    litra: { type: Number, required: true },
    kilometra: { type: Number, required: true },
    totali: { type: Number, required: true },
    serial: { type: String, required: true, unique: true }
  },
  { timestamps: true }
);

schema.plugin(uniqueValidator);

const Derivati = mongoose.model("Derivate", schema);

module.exports = Derivati;
