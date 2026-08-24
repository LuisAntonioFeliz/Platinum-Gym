import prisma from '../config/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Registrar un nuevo usuario
export const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar si el usuario ya existe
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Hashear la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear el usuario en PostgreSQL
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });

        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            userId: newUser.id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor al registrar' });
    }
};

// Iniciar sesión
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar el usuario
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Validar contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Generar Token JWT
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET || 'secret_key_temporal',
            { expiresIn: '1d' }
        );

        res.json({
            message: 'Inicio de sesión exitoso',
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor al iniciar sesión' });
    }
};