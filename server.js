"use strict";

const express = require("express");
const morgan = require("morgan");
const { getUsers } = require("./exercises/exercise-1.3")
const { addUser } = require("./exercises/exercise-1.4");
const { createGreeting, getGreeting, getGreetings } = require("./exercises/exercise-2")
const { batchImport } = require("./batchImport")

const PORT = process.env.PORT || 8000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //Exercise 1
  .get("/exercise-1/users", getUsers)
  .post("/exercise-1/users", addUser)
  //Exercise 2
  .post("/exercise-2/greetings", createGreeting)
  .get("/exercise-2/greetings/:_id", getGreeting)
  .get("/exercise-2/greetings", getGreetings)

  // handle 404s
  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
