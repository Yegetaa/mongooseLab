
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";

// const client = new MongoClient(process.env.ATLAS_URI);

// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

// let db = conn.db("sample_training");



export async function conn() {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('Connected to MongoDB');
    } catch (e) {
        console.log(`Error Connecting to MongoDB: ${e}`);
    }
}
