import { NextFunction, Request, Response } from "express";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  console.log("files", req.files);
  return res.json({});
};

export { createBook };
