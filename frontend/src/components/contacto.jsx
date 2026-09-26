import { useState } from "react";
//import { enviarContacto } from "./../../services/contacto";

// --- Estilos (solo presentación) ---
const campoBase =
    "w-full border bg-transparent px-5 text-[16px] text-white placeholder:text-[#999999] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const bordeNormal = "border-white/40 focus:border-white";
const bordeError = "border-rojo";
const etiquetaClass =
    "text-[14px] font-medium uppercase tracking-[0.1em] text-white";

function MensajeError({ id, children }) {
    return (
        <p id={id} className="m-0 text-[14px] leading-[1.4] text-white">
            {children}
        </p>
    );
}

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
                // --- MODO SIMULACIÓN ---
                // Simulamos una pequeña espera de red (1 segundo)
                await new Promise((resolve) => setTimeout(resolve, 1000));

                setStatus(
                    "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
                );

                // Limpiar los campos del formulario
                setNombre("");
                setEmail("");
                setMensaje("");
                setErrores({});

                // Ocultar el mensaje automáticamente después de 5 segundos
                setTimeout(() => {
                    setStatus("");
                }, 5000);
            } catch {
                setStatus("Error al enviar el mensaje. Inténtalo de nuevo.");
            }
        }
    };

    return (
        <section
            id="contacto"
            aria-labelledby="contacto-titulo"
            className="scroll-mt-20 bg-black text-white"
        >
            <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
                <header>
                    <h2
                        id="contacto-titulo"
                        className="text-[clamp(2.25rem,5vw,3.125rem)] font-normal leading-[0.95] tracking-[-0.04em] [text-wrap:balance]"
                    >
                        Contáctanos para más información
                    </h2>
                    <p className="mt-6 max-w-[520px] text-[19px] leading-[1.35] tracking-[-0.03em] text-[#999999]">
                        Déjanos tu mensaje y tu correo para recibir información sobre planes
                        y sucursales.
                    </p>
                </header>

                <div>
                    <form
                        id="formContacto"
                        onSubmit={handleSubmit}
                        aria-labelledby="contacto-titulo"
                        className="flex flex-col gap-6"
                    >
                        <p className="m-0 text-[14px] font-medium uppercase tracking-[0.1em] text-[#999999]">
                            <span className="text-rojo" aria-hidden="true">
                                *
                            </span>{" "}
                            Campo obligatorio
                        </p>

                        {/* Campo Nombre */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nombreContacto" className={etiquetaClass}>
                                Nombre{" "}
                                <span className="text-rojo" aria-hidden="true">
                                    *
                                </span>
                            </label>
                            <input
                                type="text"
                                id="nombreContacto"
                                placeholder="Nombre..."
                                autoComplete="name"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                aria-invalid={Boolean(errores.nombre)}
                                aria-describedby={
                                    errores.nombre ? "nombreContacto-error" : undefined
                                }
                                className={`h-12 rounded-full ${campoBase} ${errores.nombre ? bordeError : bordeNormal
                                    }`}
                            />
                            {errores.nombre && (
                                <MensajeError id="nombreContacto-error">
                                    Escribe tu nombre.
                                </MensajeError>
                            )}
                        </div>

                        {/* Campo Email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="emailContacto" className={etiquetaClass}>
                                E-mail{" "}
                                <span className="text-rojo" aria-hidden="true">
                                    *
                                </span>
                            </label>
                            <input
                                type="email"
                                id="emailContacto"
                                placeholder="ejemplo@correo.com"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-invalid={Boolean(errores.email)}
                                aria-describedby={
                                    errores.email ? "emailContacto-error" : undefined
                                }
                                className={`h-12 rounded-full ${campoBase} ${errores.email ? bordeError : bordeNormal
                                    }`}
                            />
                            {errores.email && (
                                <MensajeError id="emailContacto-error">
                                    Escribe un correo válido.
                                </MensajeError>
                            )}
                        </div>

                        {/* Campo Mensaje */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mensaje" className={etiquetaClass}>
                                Mensaje{" "}
                                <span className="text-rojo" aria-hidden="true">
                                    *
                                </span>
                            </label>
                            <textarea
                                id="mensaje"
                                placeholder="Escriba su mensaje..."
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                aria-invalid={Boolean(errores.mensaje)}
                                aria-describedby={errores.mensaje ? "mensaje-error" : undefined}
                                className={`min-h-[160px] resize-y rounded-3xl py-4 ${campoBase} ${errores.mensaje ? bordeError : bordeNormal
                                    }`}
                            ></textarea>
                            {errores.mensaje && (
                                <MensajeError id="mensaje-error">
                                    Escribe tu mensaje.
                                </MensajeError>
                            )}
                        </div>

                        {/* Botón de envío */}
                        <div className="mt-2 flex">
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-full bg-azul px-10 py-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-[#1c54b2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>

                    <p
                        role="status"
                        className="m-0 mt-6 min-h-[1.5rem] text-[16px] leading-[1.5] text-white"
                    >
                        {status}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default FormContacto;
