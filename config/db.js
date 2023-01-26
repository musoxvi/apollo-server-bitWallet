import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_MONGO, {
      autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('💾 DB Connected');
  } catch (error) {
    console.log('⛔ connectDB error: ', error);
    process.exit(1);
  }
};

export default connectDB;
