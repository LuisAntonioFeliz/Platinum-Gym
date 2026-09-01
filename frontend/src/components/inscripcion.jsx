import React, { useState } from "react";
//import { registrarCliente } from "../../services/clientes";

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
      const resultado = await registrarCliente({
        ...formData,
        branchId: Number(formData.branchId),
        planId: Number(formData.planId),
      });

      setCargando(false);
      setMensajeEstado({
        tipo: "success",
        texto: resultado.message || "¡Inscripción realizada con éxito!",
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setCargando(false);
      setMensajeEstado({
        tipo: "error",
        texto:
          error.response?.data?.error || "Ocurrió un error en el registro.",
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };*/

  const handleSubmit = async (e) => {
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
      // Simulamos una pequeña espera de red (1 segundo)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Si quieres probar tu servicio real en el futuro, aquí iría el axios.post
      // const resultado = await registrarCliente({...});

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
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setCargando(false);
      setMensajeEstado({
        tipo: "error",
        texto: "Ocurrió un error en el registro.",
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const inputClass =
    "w-full border border-blue-400 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600 text-zinc-700 text-sm bg-white";
  const labelClass = "block text-sm font-medium text-zinc-800";
  const asteriskClass = "text-red-500 ml-0.5";

  return (
    // Se ajustó con mx-4 para pantallas pequeñas y max-w-4xl con centrado automático en pantallas grandes
    <div
      id="inscripcion"
      className="max-w-4xl mx-4 sm:mx-auto p-4 sm:p-8 md:p-12 border-2 border-blue-400 rounded-2xl shadow-sm bg-white mt-10"
    >
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3 text-center">
          Inscríbete con nosotros
        </h2>

        <p className="text-sm text-red-500 block mb-8 text-center font-medium">
          * Campo obligatorio
        </p>

        {mensajeEstado.texto && (
          <div
            className={`p-4 mb-6 rounded-lg text-sm text-center font-medium ${
              mensajeEstado.tipo === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {mensajeEstado.texto}
          </div>
        )}

        {/* Grid adaptable a una columna en móviles y dos en tablets/PCs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Nombre */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>
              Nombre <span className={asteriskClass}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nombre..."
              className={inputClass}
            />
          </div>

          {/* Sexo */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>
              Sexo <span className={asteriskClass}>*</span>
            </label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">-- Seleccione sexo --</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>

          {/* Dirección */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>
              Dirección <span className={asteriskClass}>*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Dirección..."
              className={inputClass}
            />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>
              Teléfono <span className={asteriskClass}>*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(809) 000-0000"
              maxLength={14}
              className={inputClass}
            />
          </div>

          {/* E-mail */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>
              E-mail <span className={asteriskClass}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ejemplo@correo.com"
              className={inputClass}
            />
          </div>

          {/* Sucursal */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>
              Sucursal <span className={asteriskClass}>*</span>
            </label>
            <select
              name="branchId"
              value={formData.branchId}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">-- Seleccione la sucursal --</option>
              <option value="1">Bonao</option>
              <option value="2">Santo Domingo</option>
              <option value="3">Santiago</option>
            </select>
          </div>

          {/* Plan (Ocupa ambas columnas en pantallas medianas, fluido en móviles) */}
          <div className="flex flex-col gap-1.5 md:col-span-2 w-full">
            <label className={labelClass}>
              Plan <span className={asteriskClass}>*</span>
            </label>
            <select
              name="planId"
              value={formData.planId}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">-- Seleccione el plan --</option>
              <option value="1">Plan Básico</option>
              <option value="2">Plan Premium</option>
            </select>
          </div>
        </div>

        {/* Botón responsivo con ancho completo en móviles y ancho automático centrado en pantallas grandes */}
        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            disabled={cargando}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-16 rounded-xl transition duration-200 disabled:opacity-50 text-lg shadow-md"
          >
            {cargando ? "Procesando..." : "Inscríbete"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInscripcion;
