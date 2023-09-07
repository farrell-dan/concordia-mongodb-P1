# Exercise 2.3 - `findOne()` greeting

Time to read the data!

1. Create a new `async` function called `getGreeting` in the `exercise-2.js` file.
2. Add a `res` in there for testing purposes.

```js
const getGreeting = async (req, res) => {
  res.status(200).json("bacon");
};
```

1. In `server.js`, create a new `get` endpoint at `"/exercise-2/greetings/:_id"`.
2. Require the function you just wrote.
3. Use Insomnia to test the endpoint. You should get a 'bacon' response...
4. Declare a variable `_id` to hold `req.params._id`.
5. Use the `.findOne` method to retrieve ONE element, based on its `_id`, from the database. `.findOne` takes a callback that will handle to handle the result.

_If the element doesn't exist, it will NOT return an error. It will return `null`. So we can add a condition to return the result only if it exists, if not return an error message._

```js
const result = await db.collection("greetings").findOne({ _id });

result
    ? res.status(200).json({ status: 200, _id, data: result })
    : res.status(404).json({ status: 404, _id, data: "Not Found" });

client.close();
```
