import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../config/database.js";
import { generarToken } from "../utils/jwt.js";

const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Auth funcionando correctamente",
        endpoints: {
            login: "POST /api/auth/login",
            register: "POST /api/auth/register",
            profile: "GET /api/auth/profile"
        }
    });
});

router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar si ya existe
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "El usuario ya existe" });
        }

        // Hashear contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear en PostgreSQL
        await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });

        res.status(201).json({
            success: true, message: "Usuario registrado correctamente"
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await prisma.user.findUnique({ where: { email } });
        if (!usuario) return res.status(404).json({
            success: false, message: "Usuario no encontrado"
        });

        const esValido = await bcrypt.compare(password, usuario.password);
        if (!esValido) return res.status(401).json({
            success: false, message: "Credenciales inválidas"
        });

        // Usamos id numérico de postgres
        const token = generarToken(usuario.id);
        res.json({
            success: true, token
        });
    } catch (error) {
        res.status(500).json({
            success: false, message: error.message
        });
    }
});

router.get("/profile", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({
            success: false, message: "Token requerido"
        });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const usuario = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, email: true, createdAt: true } // Excluimos el password por seguridad
        });

        if (!usuario) {
            return res.status(404).json({ success: false, message: "Usuario no encontrado" });
        }

        res.json({
            success: true, data: usuario
        });
    } catch (error) {
        res.status(401).json({
            success: false, message: "Token inválido"
        });
    }
});

export default router;