import app from "./src/app";

const StartServer = () => {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`port is running on: ${port}`);
  });
};

StartServer();
