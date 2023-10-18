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

const getGreetings = async (request, response) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        await client.connect();
        const db = client.db("exercises");
        const collection = db.collection("greetings")

        const start = parseInt(request.query.start) || 0;
        const limit = parseInt(request.query.limit) || 25;

        if (start < 0 || limit < 0) {
          return response
            .status(400)
            .json({
              status: 400,
              message: "Start and limit must be positive numbers.",
            });
        }


        const totalDocuments = await collection.countDocuments();

         if (start >= totalDocuments) {
           return response.status(400).json({
             status: 400,
             message: "Start value is out of bounds.",
           });
         }

         
         const adjustedLimit = Math.min(limit, totalDocuments - start);


        const result =
          start === 0 && limit === 0
            ? await collection.find({}).toArray()
            : await collection.find({}).skip(start).limit(adjustedLimit).toArray();

        const responsePayload = {
            status: 200,
            Start: start,
            Limit: adjustedLimit,
            data: result,
        };
        
        if (adjustedLimit < limit) {
          responsePayload.message = `The query was adjusted to retrieve ${adjustedLimit} document(s) from the start position.`;
        }

        response.status(200).json(responsePayload)
    } catch (error) {
        response
          .status(500)
          .json({ status: 500, message: "Internal Server Error" });
    }
    client.close()
}

module.exports = { createGreeting, getGreeting, getGreetings };