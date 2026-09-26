import React from "react";

const pildoraNegra =
    "inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-[#333333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black";

const Sucursales = () => {
    // Datos extraídos directamente de tu tabla Branch en PostgreSQL
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

    // Scroll suave hacia el formulario de inscripción (su id es "inscripcion")
    const scrollToInscripcion = () => {
        const elemento = document.getElementById("inscripcion");
        if (elemento) {
            elemento.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="sucursales"
            aria-labelledby="sucursales-titulo"
            className="bg-white text-black"
        >
            <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
                <header className="max-w-[640px]">
                    <h2
                        id="sucursales-titulo"
                        className="scroll-mt-32 text-[clamp(2.25rem,5vw,3.125rem)] font-normal leading-[0.95] tracking-[-0.04em] [text-wrap:balance]"
                    >
                        Nuestras Sucursales
                    </h2>
                    <p className="mt-6 max-w-[520px] text-[19px] leading-[1.35] tracking-[-0.03em] text-[#595959]">
                        Tres sucursales. Elige la más cercana a ti.
                    </p>
                </header>

                <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
                    {sucursalesList.map((sucursal) => (
                        <article
                            key={sucursal.name}
                            className="flex flex-col rounded-3xl bg-platino p-8"
                        >
                            <h3 className="m-0 text-[32px] font-semibold leading-[1.05] tracking-[-0.04em]">
                                {sucursal.name}
                            </h3>

                            <dl className="m-0 mt-8">
                                <div className="border-t border-black/15 py-4">
                                    <dt className="text-[14px] font-medium uppercase tracking-[0.1em] text-black/60">
                                        Dirección
                                    </dt>
                                    <dd className="m-0 mt-2 text-[16px] leading-[1.4]">
                                        {sucursal.address}
                                    </dd>
                                </div>
                                <div className="border-t border-black/15 py-4">
                                    <dt className="text-[14px] font-medium uppercase tracking-[0.1em] text-black/60">
                                        Horario
                                    </dt>
                                    <dd className="m-0 mt-2 text-[16px] leading-[1.4]">
                                        {sucursal.schedule}
                                    </dd>
                                </div>
                                <div className="border-y border-black/15 py-4">
                                    <dt className="text-[14px] font-medium uppercase tracking-[0.1em] text-black/60">
                                        Teléfono
                                    </dt>
                                    <dd className="m-0 mt-2 text-[16px] leading-[1.4]">
                                        <a
                                            href={`tel:${sucursal.phone.replace(/\D/g, "")}`}
                                            className="text-black underline decoration-black/30 underline-offset-4 transition-colors hover:decoration-black"
                                        >
                                            {sucursal.phone}
                                        </a>
                                    </dd>
                                </div>
                            </dl>

                            <div className="mt-auto pt-8">
                                <button
                                    type="button"
                                    onClick={scrollToInscripcion}
                                    className={pildoraNegra}
                                >
                                    Inscribirse
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sucursales;
