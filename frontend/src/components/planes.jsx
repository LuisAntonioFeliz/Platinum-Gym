function Planes() {
    return (
        <>
            <h2
                id="planes-titulo"
                className="mt-4 mb-4 text-center text-[28px] font-semibold text-azul scroll-mt-[90px]"
            >
                Nuestros Planes
            </h2>
            <section
                id="planes"
                className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 p-8 max-md:grid-cols-1"
            >
                <article
                    id="plan-basico"
                    className="mx-auto w-[60%] max-w-[960px] rounded-lg border-2 border-azul bg-platino p-6 text-center max-md:w-[90%]"
                >
                    <h3 className="text-[20px] font-semibold text-azul">
                        Plan Básico
                    </h3>
                    <ul>
                        <li className="my-4 text-[16px] font-normal text-black list-none">
                            Acceso solo a la sucursal seleccionada.
                        </li>
                        <li className="my-4 text-[16px] font-normal text-black list-none">
                            Acceso ilimitado a todos los equipos.
                        </li>
                        <li className="my-4 text-[16px] font-normal text-black list-none">
                            No incluye la playera.
                        </li>
                        <li className="my-4 text-[16px] font-normal text-black list-none">
                            Uso de las duchas y vestidores.
                        </li>
                        <li className="my-4 text-[16px] font-normal text-black list-none">
                            Una unica evaluación al inicio de su membresia.
                        </li>
                    </ul>
                    <br />
                    <p className="text-[18px] font-normal">$900.00 al mes</p>
                    <br />
                    <a
                        href="#inscripcion"
                        className="no-underline inline-block rounded-md border-0 bg-azul px-6 py-3 text-center text-[20px] font-bold text-white visited:text-white hover:bg-[#1c54b2] max-md:px-4 max-md:py-2 max-md:text-[16px]"
                    >
                        Elegir Plan
                    </a>
                </article>
                <article
                    id="plan-premium"
                    className="mx-auto w-[60%] max-w-[960px] rounded-lg border-2 border-azul bg-platino p-6 text-center max-md:w-[90%]"
                >
                    <h3 className="text-[20px] font-semibold text-azul">
                        Plan Premium
                    </h3>
                    <ul>
                        <li className="my-4 text-[16px] font-normal text-black list-none">
                            Acceso a todas las sucursales de Platinum Gym.
                        </li>
                        <li className="my-4 text-[16px] font-normal text-black list-none">
                            Acceso ilimitado a todos los equipos.
                        </li>
                        <li className="my-4 text-[16px] font-normal text-black list-none">
                            Incluye la playera al inscribirse.
                        </li>
                        <li className="my-4 text-[16px] font-normal text-black list-none">
                            Uso de las duchas y vestidores.
                        </li>
                        <li className="my-4 text-[16px] font-normal text-black list-none">
                            Evaluación cada 3 meses de progreso fisico.
                        </li>
                    </ul>
                    <br />
                    <p className="text-[18px] font-normal">$1,200.00 al mes</p>
                    <br />
                    <a
                        href="#inscripcion"
                        className="no-underline inline-block rounded-md border-0 bg-azul px-6 py-3 text-center text-[20px] font-bold text-white visited:text-white hover:bg-[#1c54b2] max-md:px-4 max-md:py-2 max-md:text-[16px]"
                    >
                        Elegir Plan
                    </a>
                </article>
            </section>
        </>
    );
}

export default Planes;