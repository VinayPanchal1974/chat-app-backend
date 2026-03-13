import { logger } from "../utils/logger.js";
export const errorHandler = (err, req, res, next) => {
    logger.error(err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
};
