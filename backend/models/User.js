const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, index: true, trim:true },
  passwordHash: { type: String, required: true },
  isSubscribed: { type: Boolean, default: false },
  subscriptionAt: Date,
}, { timestamps: true });

UserSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('User', UserSchema);
