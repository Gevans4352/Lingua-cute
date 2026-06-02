import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load the .env file from the backend root
dotenv.config({ path: path.resolve('./.env') });

const connectDB = async () => {
  try {
    console.log('MONGODB_URI:', process.env.MONGODB_URI); // debug print
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;