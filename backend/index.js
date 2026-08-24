import express from 'express';
import cors from 'cors'

require('dotenv').config();

const prisma = require('./db'); // Importamos la instancia desde db.js

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'API de Platinum Gym funcionando al 100%' });
});

// 1. Obtener sucursales (Bonao, Santo Domingo, Santiago)
app.get('/api/branches', async (req, res) => {
    try {
        const branches = await prisma.branch.findMany();
        res.json(branches);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las sucursales' });
    }
});

// 2. Obtener planes (Básico y Premium con sus precios)
app.get('/api/plans', async (req, res) => {
    try {
        const plans = await prisma.plan.findMany();
        res.json(plans);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los planes' });
    }
});

// 3. Registrar al usuario desde el formulario de inscripción
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
        res.status(201).json({ message: '¡Inscripción registrada con éxito!', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'No se pudo completar el registro. Verifica que el correo no esté duplicado.' });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});