import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Database is already connected");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");

    connection.isConnected = db.connections[0].readyState;

    console.log("db connected succesfully");
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
}

export default dbConnect;
