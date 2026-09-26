const planes = [
    {
        id: "plan-basico",
        nombre: "Plan Básico",
        precio: "$900.00",
        oscuro: false,
        caracteristicas: [
            { texto: "Acceso solo a la sucursal seleccionada.", incluido: false },
            { texto: "Acceso ilimitado a todos los equipos.", incluido: true },
            { texto: "No incluye la playera.", incluido: false },
            { texto: "Uso de las duchas y vestidores.", incluido: true },
            {
                texto: "Una única evaluación al inicio de su membresía.",
                incluido: true,
            },
        ],
    },
    {
        id: "plan-premium",
        nombre: "Plan Premium",
        precio: "$1,200.00",
        oscuro: true,
        caracteristicas: [
            {
                texto: "Acceso a todas las sucursales de Platinum Gym.",
                incluido: true,
            },
            { texto: "Acceso ilimitado a todos los equipos.", incluido: true },
            { texto: "Incluye la playera al inscribirse.", incluido: true },
            { texto: "Uso de las duchas y vestidores.", incluido: true },
            { texto: "Evaluación cada 3 meses de progreso físico.", incluido: true },
        ],
    },
];

const pildoraAzul =
    "inline-flex w-full items-center justify-center rounded-full bg-azul px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-colors duration-200 hover:bg-[#1c54b2] visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul sm:w-auto sm:self-start";

const pildoraNegra =
    "inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-colors duration-200 hover:bg-[#333333] visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:w-auto sm:self-start";

// Icono monolínea: marca de verificación (incluido) o guion (límite o exclusión)
function Icono({ incluido }) {
    return (
        <svg
            viewBox="0 0 20 20"
            className="mt-0.5 h-5 w-5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {incluido ? <path d="M4 10.5l4 4 8-9" /> : <path d="M5 10h10" />}
        </svg>
    );
}

function Planes() {
    return (
        <section
            id="planes"
            aria-labelledby="planes-titulo"
            className="bg-white text-black"
        >
            <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
                <header className="max-w-[640px]">
                    <h2
                        id="planes-titulo"
                        className="scroll-mt-32 text-[clamp(2.25rem,5vw,3.125rem)] font-normal leading-[0.95] tracking-[-0.04em] [text-wrap:balance]"
                    >
                        Nuestros Planes
                    </h2>
                    <p className="mt-6 max-w-[520px] text-[19px] leading-[1.35] tracking-[-0.03em] text-[#595959]">
                        Dos membresías. Elige la que se ajusta a tu ritmo de entrenamiento.
                    </p>
                </header>

                <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
                    {planes.map((plan) => (
                        <article
                            key={plan.id}
                            id={plan.id}
                            className={`flex flex-col rounded-3xl p-8 md:p-10 ${plan.oscuro ? "bg-black text-white" : "bg-platino text-black"
                                }`}
                        >
                            <h3 className="m-0 text-[24px] font-bold leading-[1.13] tracking-[-0.03em]">
                                {plan.nombre}
                            </h3>

                            <p className="m-0 mt-8 flex items-baseline gap-3">
                                <span className="text-[clamp(2.25rem,5vw,3.125rem)] leading-none tracking-[-0.04em]">
                                    {plan.precio}
                                </span>
                                <span
                                    className={`text-[16px] ${plan.oscuro ? "text-[#999999]" : "text-black/65"
                                        }`}
                                >
                                    al mes
                                </span>
                            </p>

                            <ul className="m-0 mt-10 flex list-none flex-col gap-4 p-0">
                                {plan.caracteristicas.map((item) => (
                                    <li
                                        key={item.texto}
                                        className="flex items-start gap-3 text-[16px] leading-[1.4]"
                                    >
                                        <Icono incluido={item.incluido} />
                                        <span>{item.texto}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto flex flex-col pt-12">
                                <a
                                    href="#inscripcion"
                                    className={plan.oscuro ? pildoraAzul : pildoraNegra}
                                >
                                    Elegir plan
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Planes;
