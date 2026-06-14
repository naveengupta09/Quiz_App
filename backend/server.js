import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { connectDB } from './config/db.js';
import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js';
import resultRoutes from './routes/result.js';

const app = express();
const PORT = process.env.PORT || 4000;


    // MIDDLEWARES
    app.use(cors()); //as the user will be found first then we use the json
    app.use(express.json());
    app.use("/api/users", userRoutes);

    
    // DB
    connectDB();

    // ROUTES
    app.use("/api/admin", adminRoutes);
    app.use("/api/results", resultRoutes);

    app.get("/", (req, res) => {
        res.send("Welcome to the Quiz API");
    });

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });