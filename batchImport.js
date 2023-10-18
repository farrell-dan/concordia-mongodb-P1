const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const greetings = require("./data/greetings.json");

const batchImport = async (request, response) => {


    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("exercises");
        const result = await db.collection("greetings").insertMany(greetings);
        console.log("It worked!")
    } catch (error) {
        console.log ("Yeah... try again...")
    }
  client.close();
};

batchImport();
