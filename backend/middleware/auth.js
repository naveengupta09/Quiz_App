import User from "../model/User.js";

export const protect = (req, res, next) => next();

export const isAdmin = async (req, res, next) => {
    next();
}