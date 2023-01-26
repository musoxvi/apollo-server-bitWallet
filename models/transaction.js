import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const transactionSchema = new mongoose.Schema({
  timestamp: {
    type: String,
    required: true,
    unique: true,
    minlength: 12,
  },
  state: {
    type: String,
    minlength: 4,
  },
  address: {
    type: String,
    minlength: 30,
    required: true,
    trim: true,
  },
  amount: {
    type: String,
    require: true,
  },
  currency: {
    type: String,
    required: true,
    minlength: 2,
  },
  fee: {
    type: String,
    required: true,
    minlength: 2,
  },
  network: {
    type: String,
    required: true,
    minlength: 2,
  },
  operationType: {
    type: String,
    required: true,
    minlength: 4,
  },
});

transactionSchema.plugin(uniqueValidator);

export default mongoose.model('Transaction', transactionSchema);
