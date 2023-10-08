import { MongoClient } from "mongodb";
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);
const db = client.db("dengue");
export { client, db };
