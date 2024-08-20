import { config as cnfg } from "dotenv";

cnfg();

const _config = {
  port: process.env.port,
};

export const config = Object.freeze(_config);
