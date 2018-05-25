const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const uid = require('uid');

const { Schema } = mongoose;

const userSchema = new Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: false, min: 18 },
  sex: { type: String, required: false, enum: ['male', 'female'] },
  cart: { type: [String] },
}, {
  timestamps: true,
});

userSchema.methods.setPass = function (password) {
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    this.password = hash;
  });
};

userSchema.methods.setId = function () {
  this.id = uid(10);
};

userSchema.methods.addProduct = function (product) {
  this.cart.push(product);
};

module.exports = mongoose.model('User', userSchema);
