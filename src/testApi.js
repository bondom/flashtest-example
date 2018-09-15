const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const todoListRequestsDelay = 100;
const initialTodoList = [
  {
    id: 1,
    text: "drink water"
  },
  {
    id: 2,
    text: "buy banana"
  }
];

let todoList = JSON.parse(JSON.stringify(initialTodoList));

// todo list
app.get("/todolist", (req, res) => {
  setTimeout(() => {
    res.json(todoList);
  }, todoListRequestsDelay);
});

app.delete("/todolist/:id", (req, res) => {
  const { id } = req.params;
  setTimeout(() => {
    todoList = todoList.filter(item => item.id != id);
    res.sendStatus(200);
  }, todoListRequestsDelay);
});

app.post("/todolist/:text", (req, res) => {
  const { text } = req.params;
  setTimeout(() => {
    const newId =
      todoList.length === 0
        ? 1
        : Math.max.apply(null, todoList.map(item => item.id)) + 1;
    todoList.push({
      id: newId,
      text
    });
    res.sendStatus(200);
  }, todoListRequestsDelay);
});

app.post("/todolist-reset", (req, res) => {
  setTimeout(() => {
    todoList = JSON.parse(JSON.stringify(initialTodoList));
    res.sendStatus(200);
  }, todoListRequestsDelay);
});

app.disable("etag");

/* eslint-disable no-console */
app.listen(3002, () => console.log("Test api listening on port 3002!"));
