import prisma from '../config/database.js';

// Obtener todos los clientes
export const getClientes = async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany();
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los clientes' });
    }
};

// Crear un cliente nuevo
export const createCliente = async (req, res) => {
    try {
        const { nombre, email, telefono, plan } = req.body;

        const nuevoCliente = await prisma.cliente.create({
            data: {
                nombre,
                email,
                telefono,
                plan
            }
        });

        res.status(201).json(nuevoCliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el cliente' });
    }
};

// Eliminar un cliente
export const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.cliente.delete({
            where: { id: Number(id) }
        });

        res.json({ message: 'Cliente eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el cliente' });
    }
};