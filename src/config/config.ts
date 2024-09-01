import { config as cnfg } from "dotenv";

cnfg();

const _config = {
  port: process.env.port,
  dataBaseUrl: process.env.mongooseConnectionStr,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
};

export const config = Object.freeze(_config);
