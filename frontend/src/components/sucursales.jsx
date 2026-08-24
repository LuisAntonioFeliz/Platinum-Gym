import React from "react";

const Sucursales = () => {
    // Datos extraídos directamente de tu tabla Branch en MySQL
    const sucursalesList = [
        {
            name: "Bonao",
            address: "Avenida Libertad #83, Bonao",
            phone: "809-525-0000",
            schedule: "Lunes a Sábado: 6:00 AM - 10:00 PM",
        },
        {
            name: "Santo Domingo",
            address: "Avenida John F. Kennedy #21, Santo Domingo, D.N.",
            phone: "809-567-0000",
            schedule: "Lunes a Domingo: 5:00 AM - 11:00 PM",
        },
        {
            name: "Santiago",
            address: "Carretera Las Flores #7, Santiago",
            phone: "809-582-0000",
            schedule: "Lunes a Sábado: 6:00 AM - 10:00 PM",
        },
    ];

    // Función para hacer scroll suave hacia el formulario de inscripción
    const scrollToInscripcion = () => {
        const elemento = document.getElementById("registrarUsuario");
        if (elemento) {
            elemento.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="sucursales-titulo" className="max-w-6xl mx-auto py-16 px-6">
            {/* Título de la sección con el mismo estilo azul y tipografía */}
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-12 text-center">
                Nuestras Sucursales
            </h2>

            {/* Grid de tarjetas idéntico al de los planes pero con fondo blanco */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sucursalesList.map((sucursal, index) => (
                    <div
                        key={index}
                        className="border-2 border-azul rounded-2xl p-8 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
                    >
                        {/* Contenido superior de la tarjeta */}
                        <div>
                            <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                                {sucursal.name}
                            </h3>

                            <div className="space-y-4 mb-8 text-sm text-zinc-700 text-center">
                                <p>
                                    <span className="font-semibold text-zinc-900 block mb-1">
                                        Dirección:
                                    </span>
                                    {sucursal.address}
                                </p>
                                <p>
                                    <span className="font-semibold text-zinc-900 block mb-1">
                                        Horario:
                                    </span>
                                    {sucursal.schedule}
                                </p>
                                <p>
                                    <span className="font-semibold text-zinc-900 block mb-1">
                                        Teléfono:
                                    </span>
                                    {sucursal.phone}
                                </p>
                            </div>
                        </div>

                        {/* Botón inferior con acción de scroll */}
                        <div className="text-center mt-auto">
                            <button
                                onClick={scrollToInscripcion}
                                className="bg-azul hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-200 shadow-md w-full"
                            >
                                Inscribirse
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sucursales;
