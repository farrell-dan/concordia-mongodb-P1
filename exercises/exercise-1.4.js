const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addUser = async (request, response) => {
  const { name } = request.body;

  if (!name) {
    return response
      .status(400)
      .json({ status: 400, message: "Name is required" });
  }

  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("exercise_1");

    const result = await db.collection("users").insertOne({ name });

    if (result && result.insertedId) {
      return response
        .status(200)
        .json({ status: 200, data: { name: name, _id: result.insertedId } });
    } else {
      return response
        .status(500)
        .json({ status: 500, message: "Failed to add user" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal Server Error" });
  } finally {
    client.close();
  }
};

module.exports = { addUser };
