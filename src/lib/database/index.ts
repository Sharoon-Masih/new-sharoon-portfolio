import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI

let cached = (global as any).mongoose || { conn: null, promise: null }

export const connectToDb = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGO_URI) throw new Error('Mongo Connection string is missing');

    cached.promise = cached.promise || mongoose.connect(MONGO_URI, {
        dbName: "Cluster0",
        bufferCommands: false
    })

    cached.conn = await cached.promise;
    // (global as any).mongoose = cached; // This line stores the cached object (with conn and promise) in the global object But its not neccessary bcuz global updates automatically but we are manually adding it for our understanding.For more you can check this connection file in 'Evently' app.

    return cached.conn
}