const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");    ESTA DANDO ERRO

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// userSchema.plugin(uniqueValidator);    ESTA DANDO ERRO

module.exports = mongoose.model("User", userSchema);
