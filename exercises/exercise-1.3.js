const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUsers = async (request, response) => {
    const client = new MongoClient(MONGO_URI, options);
    
    try {
      await client.connect();

      const db = client.db(request.params.exercis_1);

      const users = await db.collection("users").find().toArray();

      if (users.length === 0) {
        response.status(404).json({ "status": 404, message: "No users found"});
      }else {
        response.status(200).json( {"status": 200, "data": users})
      }
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Internal Server Error"});
    }finally {
      client.close();
    }    

}

module.exports = {getUsers};