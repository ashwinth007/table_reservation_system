import app from "./app.js";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js"; // make sure this file exists and exports dbConnection

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to MongoDB first
    await dbConnection();
    console.log("✅ MongoDB connected successfully");

    // Start server only after DB connection
    app.listen(PORT, () => {
      console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();