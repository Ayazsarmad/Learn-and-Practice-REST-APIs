import { config } from "./src/config/config";
import app from "./src/app";

const StartServer = () => {
  const port = config.port || 3000;

  app.listen(port, () => {
    console.log(`port is running on: ${port}`);
  });
};

StartServer();
