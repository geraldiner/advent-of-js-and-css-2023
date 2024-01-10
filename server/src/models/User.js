const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const UserSchema = new Schema(
  {
    email: requiredString,
    password: requiredString,
    name: requiredString,
    avatar: String,
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER',
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
