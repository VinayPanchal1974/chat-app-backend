// CRITICAL: Load dotenv FIRST before any other module that use process.env
import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import rateLimit from "express-rate-limit";

const app = express();

// Trust proxy (important for cloud deployments)
app.set("trust proxy", true);

// Security middlewares
app.use(helmet());
app.use(cors());
app.use(compression());

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: "Too many requests. Please try again later.",
    });
  },
});

app.use(limiter);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.type === "entity.too.large") {
    return res.status(413).json({
      error: "Payload too large",
    });
  }
  next(error);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;
