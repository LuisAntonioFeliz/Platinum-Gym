import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// Ruta de prueba para clientes
router.get("/test", (req, res) => {
    res.json({ success: true, message: "Contacto funcionando correctamente" });
});

router.post("/", async (req, res) => {
    const { nombre, email, mensaje } = req.body; try {
        const transporter = nodemailer.createTransport({ 
            service: "gmail", auth: { 
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS }
        });
        await transporter.sendMail({
            from: email, to: process.env.EMAIL_USER,
            subject: `Nuevo mensaje de contacto de ${nombre}`,
            text: mensaje,
            html: 
            ` <h3>Nuevo mensaje de contacto</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p> `
        });
        res.json({
            success: true, message: "Mensaje enviado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            success: false, message: error.message
        });
    }
});

export default router;