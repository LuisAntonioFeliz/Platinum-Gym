import api from "./../src/api";

export const enviarContacto = async (formData) => {
    const res = await api.post("/contacto", formData);
    return res.data;
};
