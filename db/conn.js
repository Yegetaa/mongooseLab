import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);



// async function conn() {
//         try {
//             await mongoose.connect(process.env.ATLAS_URI);
//             console.log('Connected to MongoDB');
//         } catch (e) {
//             console.log(`Error Connecting to MongoDB: ${e}`);
//         }
//     }


let conn;
try {
  conn = await client.connect();
  console.log("Connected to MongoDB");
} catch (e) {
  console.error(e);
  console.log(`Didn't connect to MongoDB because: ${e}`);
}

let db = conn.db("sample_training");

export default { conn, db };







//this is the one that is working 

// export async function conn() {
//     try {
//         await mongoose.connect(process.env.ATLAS_URI);
//         console.log('Connected to MongoDB');
//     } catch (e) {
//         console.log(`Error Connecting to MongoDB: ${e}`);
//     }
// }
// the one on top is working 

