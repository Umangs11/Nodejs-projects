const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "database";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("Student");
  let data = await collection.find({}).toArray();
  console.log(data);
}
getData();

async function getData1() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("Employee");
  let data = await collection.find({}).toArray();
  console.log(data);
}
getData1();

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("Hiring");
    let data await collection.find({}).toArray();
    console.log(data);
}

dbConnect();