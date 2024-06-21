// lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cachedConnection: mongoose.Connection | null = null;

async function dbConnect() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    cachedConnection = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB successfully!');
    return cachedConnection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Propagate the error up
  }
}

// Function to test MongoDB connection
export async function testMongoDBConnection() {
  try {
    await dbConnect();
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the connection after testing
    if (cachedConnection) {
      await cachedConnection.close();
      console.log('Disconnected from MongoDB');
    }
  }
}

export default dbConnect;
