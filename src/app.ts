import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();

app.use(express.json());

//Routes
//http requests: get, post, put, patch, delete.

app.get("/", (req, res, next) => {
  res.json({ message: "this is my api learning course" });
});

app.use("/api/user", userRouter);

//global error handler
app.use(globalErrorHandler);
export default app;
