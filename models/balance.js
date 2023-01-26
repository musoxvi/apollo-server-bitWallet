import mongoose from 'mongoose';

const balanceSchema = new mongoose.Schema({
  accountId: {
    type: String,
    required: true,
    minlength: 10,
  },
  balance: {
    type: String,
    default: '0',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  currency: {
    type: String,
    required: true,
    minlength: 2,
  },
});

export default mongoose.model('Balance', balanceSchema);
