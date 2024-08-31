import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    const error = createHttpError(400, "all fields must be filled");
    return next(error);
  }

  const user = userModel.findOne({ email: email });

  if (user) {
    const error = createHttpError(400, "email exist already");
    return next(error);
  }

  res.json({ message: "new user is created" });
};

export { createUser };
