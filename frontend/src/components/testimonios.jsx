const testimonios = [
    {
        imagen: "/Imagenes/Testimonio 1.jpg",
        cita: "Platinum Gym cambió mi vida, ahora entreno con disciplina.",
        autor: "Iván Martínez",
    },
    {
        imagen: "/Imagenes/Testimonio 2.jpg",
        cita: "Los entrenadores son increíbles y el ambiente me motiva cada día.",
        autor: "Natalia Bautista",
    },
    {
        imagen: "/Imagenes/Testimonio 3.jpg",
        cita: "El plan premium vale cada peso, me siento más fuerte y saludable.",
        autor: "Carlos Rodríguez",
    },
];

function Testimonios() {
    return (
        <section
            id="testimonios"
            aria-labelledby="testimonios-titulo"
            className="bg-black text-white"
        >
            <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
                <header className="max-w-[640px]">
                    <h2
                        id="testimonios-titulo"
                        className="scroll-mt-32 text-[clamp(2.25rem,5vw,3.125rem)] font-normal leading-[0.95] tracking-[-0.04em] [text-wrap:balance]"
                    >
                        Testimonios
                    </h2>
                    <p className="mt-6 max-w-[520px] text-[19px] leading-[1.35] tracking-[-0.03em] text-[#999999]">
                        Lo que dicen quienes entrenan en Platinum Gym.
                    </p>
                </header>

                {/* Carrusel con scroll-snap en móvil; cuadrícula de 3 columnas desde md */}
                <div
                    role="region"
                    aria-label="Testimonios de socios"
                    tabIndex={0}
                    className="-mx-5 mt-12 overflow-x-auto px-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:-mx-8 sm:px-8 md:mx-0 md:mt-16 md:overflow-visible md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    <ul className="m-0 flex list-none snap-x snap-mandatory gap-4 p-0 md:grid md:grid-cols-3 md:gap-6">
                        {testimonios.map((item) => (
                            <li
                                key={item.autor}
                                className="w-[78%] shrink-0 snap-start sm:w-[46%] md:w-auto"
                            >
                                <figure className="relative m-0 flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl bg-[#191919]">
                                    <img
                                        src={item.imagen}
                                        alt="Cliente satisfecho entrenando en Platinum Gym"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <div className="relative bg-gradient-to-t from-black/85 via-black/55 to-transparent p-6 pt-28">
                                        <blockquote className="m-0">
                                            <p className="m-0 text-[20px] font-medium leading-[1.25] tracking-[-0.03em] text-white">
                                                “{item.cita}”
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-4 text-[14px] font-medium uppercase tracking-[0.1em] text-white/80">
                                            {item.autor}
                                        </figcaption>
                                    </div>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Testimonios;
