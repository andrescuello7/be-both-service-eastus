require("dotenv").config();

const { connectMongo } = require("./src/infrastructure/adapters/mongo");
const { createHttpServer } = require("./src/infrastructure/adapters/http");

async function bootstrap() {
  // Connect to MongoDB
  await connectMongo();

  // Create HTTP server and start listening
  const app = createHttpServer();
  app.listen(app.get("port"), () => {
    console.log("Server run in port " + app.get("port"));
  });
}

bootstrap().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
