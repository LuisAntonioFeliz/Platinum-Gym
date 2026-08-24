import api from "./../src/api";

export const registrarUsuario = async (usuario) => {
    const res = await api.post("/auth/register", usuario);
    return res.data;
};

export const loginUsuario = async (credenciales) => {
    const res = await api.post("/auth/login", credenciales);
    if (res.data.token) {
        localStorage.setItem("token", res.data.token);
    }
    return res.data;
};

export const obtenerPerfil = async () => {
    const res = await api.get("/auth/profile");
    return res.data;
};
