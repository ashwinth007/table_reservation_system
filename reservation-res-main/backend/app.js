import express from "express";
import cors from "cors"; // ✅ import cors
import router from "./routes/reservationRoute.js";
import ErrorHandler from "./middlewares/error.js";

const app = express();

// Enable CORS for all origins
app.use(cors({
  origin: "http://localhost:5173", // allow only your frontend OR use "*" to allow all
  methods: ["GET", "POST", "PUT", "DELETE"], // allowed HTTP methods
  credentials: true, // if you need cookies/auth
}));

app.use(express.json());
app.use("/api/v1/reservation",router);

app.get("/", (req, res) => res.send("API is running..."));

app.use(ErrorHandler);

export default app;