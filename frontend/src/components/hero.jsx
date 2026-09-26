const pildoraAzul =
    "inline-flex w-full items-center justify-center rounded-full bg-azul px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-colors duration-200 hover:bg-[#1c54b2] visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto";

const pildoraContorno =
    "inline-flex w-full items-center justify-center rounded-full border-[1.5px] border-white/40 px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-colors duration-200 hover:border-white visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto";

const metricas = [
    { valor: "3", etiqueta: "Sucursales" },
    { valor: "2", etiqueta: "Planes" },
    { valor: "$900", etiqueta: "Desde por mes" },
];

function Hero() {
    return (
        <section
            id="main"
            aria-labelledby="hero-titulo"
            className="relative min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden"
        >
            {/* Imagen de fondo atmosférica con opacidad y gradiente oscuro */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Imagenes/Hero.jpg"
                    alt="Atleta entrenando en Platinum Gym"
                    className="h-full w-full object-cover object-center opacity-50 mix-blend-luminosity md:opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/10" />
            </div>

            {/* Contenido principal sobre el fondo atmosférico */}
            <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pt-16 pb-20 sm:px-8 md:pt-24 md:pb-28 my-auto">
                <h1
                    id="hero-titulo"
                    title="Encabezado principal"
                    className="text-[clamp(2rem,9.5vw,7.5rem)] font-normal leading-[0.9] tracking-[-0.04em] text-white"
                >
                    <span className="block">Transforma</span>{" "}
                    <span className="block">tu cuerpo</span>{" "}
                    <span className="block">con tecnología</span>
                </h1>

                <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
                    <div>
                        <p className="max-w-[520px] text-[19px] leading-[1.35] tracking-[-0.03em] text-[#b3b3b3]">
                            Equipos sin límite de uso, evaluación física y tres sucursales:
                            Bonao, Santo Domingo y Santiago.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href="#inscripcion" className={pildoraAzul}>
                                Inscríbete ya
                            </a>
                            <a href="#planes-titulo" className={pildoraContorno}>
                                Ver planes
                            </a>
                        </div>
                    </div>

                    <dl className="m-0 grid grid-cols-3 gap-6 border-t border-white/20 pt-6 lg:min-w-[380px] lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0 backdrop-blur-sm bg-black/20 p-4 rounded-2xl">
                        {metricas.map((metrica) => (
                            <div
                                key={metrica.etiqueta}
                                className="flex flex-col-reverse gap-2"
                            >
                                <dt className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#b3b3b3]">
                                    {metrica.etiqueta}
                                </dt>
                                <dd className="m-0 text-[32px] leading-none tracking-[-0.04em] text-white font-semibold">
                                    {metrica.valor}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default Hero;
