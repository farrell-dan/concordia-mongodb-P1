const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const createGreeting = async (request, response) => {

    const client = new MongoClient(MONGO_URI, options);

    
    try {
        
        await client.connect();

        const db = client.db("exercises");

        const result = await db.collection("greetings").insertOne(request.body);

        response.status(201).json({ status: 201, data: request.body });

    }catch (error) {

        response
          .status(500)
          .json({ status: 500, data: request.body, message: error.message });

        console.log(error.stack)
    }

    client.close();
    
};


module.exports = { createGreeting };