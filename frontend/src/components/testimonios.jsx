function Testimonios() {
    return (
        // Contenedor principal con ancho máximo y padding lateral fluido
        <div className="max-w-6xl mx-auto px-4 sm:px-6 my-10">
            <h2
                id="testimonios-titulo"
                className="mt-4 mb-8 text-center text-2xl sm:text-[28px] font-semibold text-azul scroll-mt-[90px]"
            >
                Testimonios
            </h2>
            <section
                id="testimonios"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            >
                <figure className="w-full max-w-[340px] rounded-lg border-2 border-azul bg-white p-6 text-center shadow-sm flex flex-col items-center">
                    <img
                        src="/Imagenes/Testimonio 1.jpg"
                        alt="Cliente satisfecho entrenando en Platinum Gym"
                        className="mb-4 h-64 w-full object-cover rounded-lg"
                    />
                    <figcaption className="text-sm sm:text-[16px] font-normal text-black mt-auto">
                        "Platinum Gym cambió mi vida, ahora entreno con disciplina."
                        <br />
                        <strong className="block mt-2 font-semibold">
                            - Iván Martínez
                        </strong>
                    </figcaption>
                </figure>

                <figure className="w-full max-w-[340px] rounded-lg border-2 border-azul bg-white p-6 text-center shadow-sm flex flex-col items-center">
                    <img
                        src="/Imagenes/Testimonio 2.jpg"
                        alt="Cliente satisfecho entrenando en Platinum Gym"
                        className="mb-4 h-64 w-full object-cover rounded-lg"
                    />
                    <figcaption className="text-sm sm:text-[16px] font-normal text-black mt-auto">
                        "Los entrenadores son increíbles y el ambiente me motiva cada día."
                        <br />
                        <strong className="block mt-2 font-semibold">
                            - Natalia Bautista
                        </strong>
                    </figcaption>
                </figure>

                <figure className="w-full max-w-[340px] rounded-lg border-2 border-azul bg-white p-6 text-center shadow-sm flex flex-col items-center sm:col-span-2 lg:col-span-1">
                    <img
                        src="/Imagenes/Testimonio 3.jpg"
                        alt="Cliente satisfecho entrenando en Platinum Gym"
                        className="mb-4 h-64 w-full object-cover rounded-lg"
                    />
                    <figcaption className="text-sm sm:text-[16px] font-normal text-black mt-auto">
                        "El plan premium vale cada peso, me siento más fuerte y saludable."
                        <br />
                        <strong className="block mt-2 font-semibold">
                            - Carlos Rodríguez
                        </strong>
                    </figcaption>
                </figure>
            </section>
        </div>
    );
}

export default Testimonios;
