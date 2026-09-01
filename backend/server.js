import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './config/database.js'; // Importamos tu instancia configurada

dotenv.config();

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'API de Platinum Gym conectada a MySQL con Prisma' });
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
    const { name, sex, address, phone, email, branchId, planId } = req.body;

    try {
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
        res.status(201).json({ message: 'Inscripción exitosa', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'No se pudo completar el registro' });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});