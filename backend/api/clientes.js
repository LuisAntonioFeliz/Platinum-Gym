import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Ruta para registrar el cliente con Prisma y PostgreSQL
router.post("/register", async (req, res) => {
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
                planId: Number(planId),
            },
        });

        res.status(201).json({ message: 'Inscripción exitosa', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'No se pudo completar el registro' });
    }
});