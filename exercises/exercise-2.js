const { request, response } = require("express");
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

const getGreeting = async (request, response) => {

    const client = new MongoClient(MONGO_URI, options);
    const _id = request.params._id;
    const db = client.db("exercises");
    
    await client.connect()

    const result = await db.collection("greetings").findOne({ _id });

    if (result) {
        response.status(200).json({ status: 200, _id, data: result })
    } else {
        response.status(404).json({ status: 404, _id, data: "Not Found" });
    }

    client.close();
};



module.exports = { createGreeting, getGreeting };