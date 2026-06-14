import Result from "../model/Result.js";

// create a result
export const CreatemyResult = async (req, res) => {
    try {
        const userId = req.body.userId || "local-dev";
        const result = await Result.create({ ...req.body, userId });
        res.json(result);
    }
    catch (err) {
        console.log("CREATE RESULT ERROR:", err);
        res.status(500).json({ error: "Failed" });
    }
}

// to get result for that logged-in user
export const getMyResult = async (req, res) => {
    const userId = req.body.userId || "local-dev";
    const results = await Result.find({ userId }).sort({ createdAt: -1 });

    res.json(results);
}