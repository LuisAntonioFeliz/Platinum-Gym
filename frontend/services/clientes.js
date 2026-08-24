import api from "./../src/api";

export const registrarCliente = async (cliente) => {
    const res = await api.post("/register", cliente);
    return res.data;
};
