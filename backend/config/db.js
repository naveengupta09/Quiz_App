import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        console.warn("MONGODB_URI is not set in backend/.env; skipping database connection.");
        return false;
    }

    try {
        await mongoose.connect(mongoUri);
        console.log("Connected to DB");
        return true;
    } catch (error) {
        console.warn("Database connection failed; starting server without DB:", error.message);
        return false;
    }
};