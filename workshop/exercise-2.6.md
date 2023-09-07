# Exercise 2.6 `.deleteOne()` document

The `.deleteOne()` method functions very much like `insertOne()`. Look back at how you used that method and create a `deleteGreeting` function. If you want to validate that the document was in fact deleted; use `.deletedCount` for that.

The proper HTTP code for `DELETE` is `204`.

> NOTE: The `204` HTTP response code does not allow for content to be sent back with the response. You can use a `200` instead.

You should add a `delete` endpoint in `server.js`:

```js
.delete('/exercise-2/greetings/:_id', deleteGreeting)
```