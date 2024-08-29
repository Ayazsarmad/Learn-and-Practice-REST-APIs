import Express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = Express();

//Routes
//http requests: get, post, put, patch, delete.

app.get("/", (req, res, next) => {
  res.json({ message: "this is my api learning course" });
});

//global error handler
app.use(globalErrorHandler);
export default app;
