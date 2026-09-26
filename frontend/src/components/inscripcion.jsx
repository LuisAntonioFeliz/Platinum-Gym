import React, { useState } from "react";
//import { registrarCliente } from "../../services/clientes";

// --- Estilos (solo presentación) ---
const inputClass =
  "h-12 w-full rounded-full border border-[#808080] bg-white px-5 text-[16px] text-black placeholder:text-[#767676] transition-colors duration-200 focus:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul";
const labelClass =
  "text-[14px] font-medium uppercase tracking-[0.1em] text-black";
const asteriskClass = "ml-0.5 text-rojo";

// Definidos fuera del componente para que los inputs no se remonten en cada render
const Campo = ({ id, etiqueta, className = "", children }) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <label htmlFor={id} className={labelClass}>
      {etiqueta}
      <span className={asteriskClass} aria-hidden="true">
        *
      </span>
    </label>
    {children}
  </div>
);

const SelectPildora = ({ children, ...props }) => (
  <div className="relative">
    <select {...props} className={`${inputClass} appearance-none pr-12`}>
      {children}
    </select>
    <svg
      viewBox="0 0 20 20"
      className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 8l5 5 5-5" />
    </svg>
  </div>
);

const FormInscripcion = () => {
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    address: "",
    phone: "",
    email: "",
    branchId: "",
    planId: "",
  });

  const formatearTelefono = (value) => {
    const numbers = value.replace(/\D/g, "");
    const trimmed = numbers.slice(0, 10);

    if (trimmed.length > 6) {
      return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
    } else if (trimmed.length > 3) {
      return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3)}`;
    } else if (trimmed.length > 0) {
      return `(${trimmed}`;
    }
    return "";
  };

  const [mensajeEstado, setMensajeEstado] = useState({ tipo: "", texto: "" });
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const telefonoFormateado = formatearTelefono(value);
      setFormData({
        ...formData,
        [name]: telefonoFormateado,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensajeEstado({ tipo: "", texto: "" }); // Limpiar mensajes previos
    setCargando(true);

    // 1. Validar que no haya campos vacíos
    const { name, sex, address, phone, email, branchId, planId } = formData;
    if (!name || !sex || !address || !phone || !email || !branchId || !planId) {
      setMensajeEstado({
        tipo: "error",
        texto: "Por favor, completa todos los campos obligatorios.",
      });
      setCargando(false);
      return; // Detiene la ejecución
    }

    try {
      const response = await fetch(
        "https://platinum-gym-mbpb.onrender.com/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "No se pudo completar el registro");
      }

      // 2. Si la inscripción es exitosa
      setMensajeEstado({
        tipo: "success",
        texto: "¡Inscripción exitosa!",
      });

      // 3. Limpiar los campos del formulario
      setFormData({
        name: "",
        sex: "",
        address: "",
        phone: "",
        email: "",
        branchId: "",
        planId: "",
      });

      // 4. Hacer que el mensaje desaparezca automáticamente después de 5 segundos
      setTimeout(() => {
        setMensajeEstado({ tipo: "", texto: "" });
      }, 5000);
    } catch (error) {
      // Muestra errores del servidor (como correo duplicado)
      setMensajeEstado({
        tipo: "error",
        texto: error.message,
      });
    } finally {
      setCargando(false);
    }
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setMensajeEstado({ tipo: "", texto: "" });

    if (
      !formData.name ||
      !formData.sex ||
      !formData.address ||
      !formData.phone ||
      !formData.email ||
      !formData.branchId ||
      !formData.planId
    ) {
      setMensajeEstado({
        tipo: "error",
        texto:
          "Por favor, complete todos los campos obligatorios marcados con *",
      });
      setCargando(false);
      return;
    }

    try {
      // --- MODO SIMULACIÓN TEMPORAL ---
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCargando(false);
      setMensajeEstado({
        tipo: "success",
        texto: "¡Inscripción realizada con éxito! (Modo demostrativo)",
      });

      setFormData({
        name: "",
        sex: "",
        address: "",
        phone: "",
        email: "",
        branchId: "",
        planId: "",
      });

      // Quitamos el window.scrollTo para que te quedes en la sección del formulario
      // Opcional: Ocultar el mensaje de éxito automáticamente después de 5 segundos
      setTimeout(() => {
        setMensajeEstado({ tipo: "", texto: "" });
      }, 5000);
    } catch {
      setCargando(false);
      setMensajeEstado({
        tipo: "error",
        texto: "Ocurrió un error en el registro.",
      });
      // Quitamos el window.scrollTo de aquí también si prefieres no perder el foco
    }
  };*/

  return (
    <section
      id="inscripcion"
      aria-labelledby="inscripcion-titulo"
      className="scroll-mt-20 bg-black text-white"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <header>
          <h2
            id="inscripcion-titulo"
            className="text-[clamp(2.25rem,5vw,3.125rem)] font-normal leading-[0.95] tracking-[-0.04em] [text-wrap:balance]"
          >
            Inscríbete con nosotros
          </h2>
          <p className="mt-6 max-w-[520px] text-[19px] leading-[1.35] tracking-[-0.03em] text-[#999999]">
            Completa el formulario y elige tu sucursal y tu plan.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          aria-labelledby="inscripcion-titulo"
          className="rounded-3xl bg-white p-6 text-black sm:p-8 md:p-10"
        >
          <p className="m-0 mb-6 text-[14px] font-medium uppercase tracking-[0.1em] text-black/60">
            <span className="text-rojo" aria-hidden="true">
              *
            </span>{" "}
            Campo obligatorio
          </p>

          {mensajeEstado.texto && (
            <div
              role={mensajeEstado.tipo === "success" ? "status" : "alert"}
              className={`mb-6 flex items-start gap-3 rounded-2xl p-4 text-[16px] leading-[1.4] ${
                mensajeEstado.tipo === "success"
                  ? "bg-black text-white"
                  : "border border-rojo bg-white text-black"
              }`}
            >
              <svg
                viewBox="0 0 20 20"
                className={`mt-0.5 h-5 w-5 shrink-0 ${
                  mensajeEstado.tipo === "success" ? "" : "text-rojo"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {mensajeEstado.tipo === "success" ? (
                  <path d="M4 10.5l4 4 8-9" />
                ) : (
                  <path d="M10 5v6M10 14.5v.5" />
                )}
              </svg>
              <span>{mensajeEstado.texto}</span>
            </div>
          )}

          {/* Una columna en móviles, dos desde sm */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <Campo id="inscripcion-name" etiqueta="Nombre">
              <input
                id="inscripcion-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Nombre..."
                className={inputClass}
              />
            </Campo>

            <Campo id="inscripcion-sex" etiqueta="Sexo">
              <SelectPildora
                id="inscripcion-sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                required
              >
                <option value="">-- Seleccione sexo --</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </SelectPildora>
            </Campo>

            <Campo id="inscripcion-address" etiqueta="Dirección">
              <input
                id="inscripcion-address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                autoComplete="street-address"
                placeholder="Dirección..."
                className={inputClass}
              />
            </Campo>

            <Campo id="inscripcion-phone" etiqueta="Teléfono">
              <input
                id="inscripcion-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
                placeholder="(809) 000-0000"
                maxLength={14}
                className={inputClass}
              />
            </Campo>

            <Campo id="inscripcion-email" etiqueta="E-mail">
              <input
                id="inscripcion-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="ejemplo@correo.com"
                className={inputClass}
              />
            </Campo>

            <Campo id="inscripcion-branch" etiqueta="Sucursal">
              <SelectPildora
                id="inscripcion-branch"
                name="branchId"
                value={formData.branchId}
                onChange={handleChange}
                required
              >
                <option value="">-- Seleccione la sucursal --</option>
                <option value="1">Bonao</option>
                <option value="2">Santo Domingo</option>
                <option value="3">Santiago</option>
              </SelectPildora>
            </Campo>

            <Campo
              id="inscripcion-plan"
              etiqueta="Plan"
              className="sm:col-span-2"
            >
              <SelectPildora
                id="inscripcion-plan"
                name="planId"
                value={formData.planId}
                onChange={handleChange}
                required
              >
                <option value="">-- Seleccione el plan --</option>
                <option value="1">Plan Básico</option>
                <option value="2">Plan Premium</option>
              </SelectPildora>
            </Campo>
          </div>

          <div className="mt-10 flex">
            <button
              type="submit"
              disabled={cargando}
              className="inline-flex w-full items-center justify-center rounded-full bg-azul px-10 py-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-[#1c54b2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {cargando ? "Procesando..." : "Inscríbete"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormInscripcion;
