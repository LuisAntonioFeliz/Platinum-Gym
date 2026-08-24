import express from "express";
import prisma from "../config/database.js";

const router = express.Router();

// ✅ CREATE - Registrar un nuevo cliente
router.post("/", async (req, res) => {
    try {
        const { nombre, email, telefono, plan } = req.body;
        const clienteGuardado = await prisma.cliente.create({
            data: { nombre, email, telefono, plan }
        });
        res.status(201).json(clienteGuardado);
    } catch (error) {
        console.error("Error al guardar cliente:", error);
        res.status(500).json({
            success: false,
            mensaje: "Error al registrar cliente"
        });
    }
});

// ✅ READ - Obtener todos los clientes
router.get("/", async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany();
        res.status(200).json({ success: true, count: clientes.length, data: clientes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// ✅ READ - Obtener un cliente por ID
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await prisma.cliente.findUnique({
            where: { id: Number(id) }
        });
        if (!cliente) {
            return res.status(404).json({ success: false, message: "Cliente no encontrado" });
        }
        res.status(200).json({ success: true, data: cliente });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// ✅ UPDATE - Actualizar un cliente por ID
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, telefono, plan } = req.body;

        const clienteActualizado = await prisma.cliente.update({
            where: { id: Number(id) },
            data: { nombre, email, telefono, plan }
        });

        res.status(200).json({ success: true, data: clienteActualizado });
    } catch (error) {
        res.status(400).json({ success: false, message: "Cliente no encontrado o error al actualizar" });
    }
});

// ✅ DELETE - Eliminar un cliente por ID
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.cliente.delete({
            where: { id: Number(id) }
        });
        res.status(200).json({ success: true, message: "Cliente eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Cliente no encontrado o error al eliminar" });
    }
});

export default router;