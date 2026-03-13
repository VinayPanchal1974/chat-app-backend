import server from "./app.js";
import dotenv from 'dotenv';
dotenv.config();
const port = Number(process.env.PORT) || 8080;
const host = process.env.HOST || "localhost";
server.listen(port, host, () => {
    console.log(`Server started at http://${host}:${port}`);
});
