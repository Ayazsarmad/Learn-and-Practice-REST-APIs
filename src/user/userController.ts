import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    const error = createHttpError(400, "all fields must be filled");
    return next(error);
  }

  const user = await userModel.findOne({ email: email });

  if (user) {
    const error = createHttpError(400, "email exist already");
    return next(error);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  res.json({ message: "new user is created" });
};

export { createUser };
