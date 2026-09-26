import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import prisma from './config/database.js';

const app = express();

// Configuración robusta de CORS para desarrollo local
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    optionsSuccessStatus: 200
}));

app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'API de Platinum Gym conectada a PostgreSQL con Prisma' });
});

// Rutas de tu gimnasio
app.get('/api/branches', async (req, res) => {
    try {
        const branches = await prisma.branch.findMany();
        res.json(branches);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener sucursales' });
    }
});

app.get('/api/plans', async (req, res) => {
    try {
        const plans = await prisma.plan.findMany();
        res.json(plans);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener planes' });
    }
});

app.post('/api/register', async (req, res) => {
    try {
        const { name, sex, address, phone, email, branchId, planId } = req.body;

        const newUser = await prisma.user.create({
            data: {
                name,
                sex,
                address,
                phone,
                email,
                branchId: Number(branchId),
                planId: Number(planId)
            }
        });

        return res.status(201).json({ success: true, user: newUser });
    } catch (error) {
        console.error("Error en el registro:", error);

        // Si el correo ya existe (código P2002 de Prisma)
        if (error.code === 'P2002') {
            return res.status(400).json({
                success: false,
                message: 'Este correo electrónico ya se encuentra registrado.'
            });
        }

        return res.status(500).json({
            success: false,
            message: 'Hubo un error al procesar la inscripción.'
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, 'localhost', () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

setInterval(() => { }, 1000);