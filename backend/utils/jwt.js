import jwt from "jsonwebtoken";

export const generarToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE || "1h"
    });
};

export const verificarToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};