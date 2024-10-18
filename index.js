import express from 'express';
import bodyParser from 'body-parser';
import env from "dotenv";
import cookieParser from 'cookie-parser';
import userRoutes from "./routes/user.route.js";
import requestRoust from "./routes/request.route.js"
import dbConnection from "./db/connection.js"

dbConnection();
const app = express();
const port = 3000;

env.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/api' , userRoutes);
app.use('/api/request' , requestRoust);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

