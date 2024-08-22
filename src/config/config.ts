import { config as cnfg } from "dotenv";

cnfg();

const _config = {
  port: process.env.port,
  dataBaseUrl: process.env.mongooseConnectionStr,
};

export const config = Object.freeze(_config);
