import { useState } from "react";
import { enviarContacto } from "./../../services/contacto";

function FormContacto() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [errores, setErrores] = useState({});
    const [status, setStatus] = useState("");

    // Función para validar email con regex
    const validarEmail = (correo) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevosErrores = {};
        if (!nombre.trim()) nuevosErrores.nombre = true;
        if (!email.trim() || !validarEmail(email)) nuevosErrores.email = true;
        if (!mensaje.trim()) nuevosErrores.mensaje = true;
        setErrores(nuevosErrores);

        if (Object.keys(nuevosErrores).length === 0) {
            try {
                const res = await enviarContacto({ nombre, email, mensaje });
                setStatus(res.message); // mensaje del backend
            } catch (error) {
                setStatus("Error al enviar el mensaje: " + (error.message || error));
            }
        }
    };

    return (
        <section
            id="contacto"
            className="mx-4 sm:mx-auto my-16 max-w-[600px] rounded-xl border-2 border-azul bg-white p-6 sm:p-8 shadow-[0_0_10px_rgba(0,0,0,0.05)] scroll-mt-[90px]"
        >
            <form
                id="formContacto"
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
            >
                <h2 className="mb-2 text-center text-2xl sm:text-[28px] font-semibold text-azul">
                    Contáctanos para más información
                </h2>
                <span className="block p-0 text-center text-[14px] font-semibold text-rojo">
                    * Campo obligatorio
                </span>

                {/* Campo Nombre */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                    <label
                        htmlFor="nombreContacto"
                        className="text-left sm:text-center text-[16px] font-normal text-black"
                    >
                        Nombre <span className="text-rojo">*</span>
                    </label>
                    <input
                        type="text"
                        id="nombreContacto"
                        placeholder="Nombre..."
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className={`w-full sm:w-[320px] h-[40px] rounded border-2 border-azul bg-white px-3 text-[16px] font-normal text-black focus:outline focus:outline-2 focus:outline-azul focus:outline-offset-2 ${errores.nombre ? "border-rojo" : ""
                            }`}
                    />
                </div>

                {/* Campo Email */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                    <label
                        htmlFor="emailContacto"
                        className="text-left sm:text-center text-[16px] font-normal text-black"
                    >
                        E-mail <span className="text-rojo">*</span>
                    </label>
                    <input
                        type="email"
                        id="emailContacto"
                        placeholder="ejemplo@correo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full sm:w-[320px] h-[40px] rounded border-2 border-azul bg-white px-3 text-[16px] font-normal text-black focus:outline focus:outline-2 focus:outline-azul focus:outline-offset-2 ${errores.email ? "border-rojo" : ""
                            }`}
                    />
                </div>

                {/* Campo Mensaje */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="mensaje"
                        className="text-left text-[16px] font-normal text-black"
                    >
                        Mensaje <span className="text-rojo">*</span>
                    </label>
                    <textarea
                        id="mensaje"
                        placeholder="Escriba su mensaje..."
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        className={`h-[150px] w-full rounded border-2 border-azul bg-white p-3 text-[16px] font-normal text-black focus:outline focus:outline-2 focus:outline-azul focus:outline-offset-2 ${errores.mensaje ? "border-rojo" : ""
                            }`}
                    ></textarea>
                </div>

                {/* Botón de envío */}
                <div className="flex justify-center mt-2">
                    <button
                        type="submit"
                        className="w-full sm:w-auto rounded-md border-0 bg-azul px-8 py-3 text-center text-[18px] sm:text-[20px] font-bold text-white hover:bg-[#1c54b2] focus:outline focus:outline-2 focus:outline-azul focus:outline-offset-2 transition duration-200 shadow-md"
                    >
                        Enviar
                    </button>
                </div>
            </form>

            {status && (
                <p className="mt-4 text-center text-sm font-medium text-zinc-700">
                    {status}
                </p>
            )}
        </section>
    );
}

export default FormContacto;
