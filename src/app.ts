import Express from "express";

const app = Express();

//Routes
//http requests: get, post, put, patch, delete.

app.get("/", (req, res, next) => {
  res.json({ message: "this is my api learning course" });
});

export default app;
