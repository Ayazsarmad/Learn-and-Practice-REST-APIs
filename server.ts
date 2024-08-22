import { config } from "./src/config/config";
import app from "./src/app";
import connectDb from "./src/config/db";

const StartServer = async () => {
  const port = config.port || 3000;
  await connectDb();

  app.listen(port, () => {
    console.log(`port is running on: ${port}`);
  });
};

StartServer();
