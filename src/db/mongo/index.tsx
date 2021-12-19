import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";


export async function connectToDatabase () {
   dotenv.config();

   const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false");
           
   await client.connect();
       
   const db: mongoDB.Db = client.db("testdbro");
  
  return db      
}