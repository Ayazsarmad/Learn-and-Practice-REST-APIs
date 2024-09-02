import { NextFunction, Request, response, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./userTypes";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    const error = createHttpError(400, "all fields must be filled");
    return next(error);
  }

  try {
    const user = await userModel.findOne({ email: email });

    if (user) {
      const error = createHttpError(400, "email exist already");
      return next(error);
    }
  } catch (err) {
    return next(createHttpError(500, "error while getting user"));
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  let newUser: User | null = null;
  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    return next(createHttpError(500, "error while creating user"));
  }

  try {
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
    });

    res.json({ accessToken: token });
  } catch (error) {
    return next(createHttpError(500, "error while signing jwt token"));
  }
};
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(createHttpError(400, "all fields are unique"));
  }

  const user = await userModel.findOne({ email });
  if (!user) {
    return next(createHttpError(404, "user not found"));
  }
  const isMatch = await bcrypt.compare(password, user.password);

  res.json({ message: "o.k" });
};
export { createUser, loginUser };
