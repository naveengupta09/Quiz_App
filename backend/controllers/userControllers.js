import User from '../model/User.js';
import mongoose from 'mongoose';

// to get stats of a user
export const getStats = async (req, res) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return res.json({
                totalUsers: 0,
                loggedInUsers: 0,
                loggedInPercentage: "0.00"
            });
        }

        const totalUsers = await User.countDocuments();
        const loggedInUsers = await User.countDocuments({
            isLoggedIn: true
        });

        res.json({
            totalUsers,
            loggedInUsers: loggedInUsers,
            loggedInPercentage: totalUsers > 0 ? ((loggedInUsers / totalUsers) * 100).toFixed(2) : "0.00"
        })
    }
    catch (err) {
        console.error("Admin stats error:", err);
        res.status(500).json({ message: "Server error" });
    }
}