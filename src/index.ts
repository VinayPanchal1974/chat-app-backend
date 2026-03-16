import server from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const port = Number(process.env.PORT) || 8080;
const host = process.env.HOST || "localhost";

const startServer = async () => {
  try {
    // connect to MongoDB first
    await connectDB();

    server.listen(port, host, () => {
      console.log(`Server started at http://${host}:${port}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
