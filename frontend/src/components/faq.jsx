import { useState } from "react";

const faqs = [
    {
        pregunta: "¿Cómo puedo inscribirme?",
        respuesta:
            "Puedes completar el formulario de inscripción en esta misma página web o visitarnos personalmente en cualquiera de nuestras sucursales en Santo Domingo, Bonao o Santiago.",
    },
    {
        pregunta: "¿Qué diferencia hay entre el Plan Básico y el Plan Premium?",
        respuesta:
            "El Plan Básico te da acceso a tu sucursal de origen y área de pesas. El Plan Premium incluye acceso a todas nuestras sucursales a nivel nacional, clases grupales ilimitadas y acceso a nuestra zona de recuperación.",
    },
    {
        pregunta: "¿Puedo cambiar mi plan más adelante?",
        respuesta:
            'Sí, puedes solicitar un "upgrade" o cambio de plan en el área de recepción de tu sucursal en cualquier momento del mes.',
    },
    {
        pregunta: "¿Cuáles son los horarios de operación?",
        respuesta:
            "Nuestras sucursales de Santo Domingo y Santiago operan todos los días de 5:00 a.m. a 11:30 p.m. La sucursal de Bonao opera todos los días de 5:00 a.m. a 10:30 p.m.",
    },
    {
        pregunta: "Si me inscribo en una sucursal, ¿puedo entrenar en otra?",
        respuesta:
            "Sí, siempre y cuando cuentes con nuestra Membresía Premium, la cual te otorga acceso total a toda nuestra red de gimnasios en el país.",
    },
    {
        pregunta: "¿Ofrecen servicio de entrenamiento personalizado?",
        respuesta:
            "Contamos con un equipo de entrenadores certificados listos para ayudarte a alcanzar tus objetivos. Puedes consultar los paquetes de asesoría privada en la recepción.",
    },
    {
        pregunta: "¿Es obligatorio el uso de toalla?",
        respuesta:
            "Por higiene y respeto a los demás socios, el uso de toalla personal es obligatorio en todas las áreas de entrenamiento. Si lo olvidas, tenemos toallas disponibles para alquiler o venta.",
    },
    {
        pregunta: "¿Tienen entrenadores certificados?",
        respuesta:
            "Sí, todos nuestros entrenadores están certificados y especializados en distintas áreas.",
    },
];

// Cada pregunta abre y cierra de forma independiente
function PreguntaItem({ id, pregunta, respuesta }) {
    const [abierto, setAbierto] = useState(false);

    return (
        <div>
            <h3 className="m-0">
                <button
                    type="button"
                    id={`${id}-boton`}
                    aria-expanded={abierto}
                    aria-controls={`${id}-panel`}
                    onClick={() => setAbierto((valor) => !valor)}
                    className="group flex w-full items-center justify-between gap-6 rounded-3xl py-6 text-left text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul"
                >
                    <span className="text-[20px] font-semibold leading-[1.15] tracking-[-0.03em] md:text-[24px]">
                        {pregunta}
                    </span>
                    <span
                        aria-hidden="true"
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${abierto
                                ? "border-black bg-black text-white"
                                : "border-black/30 text-black group-hover:border-black"
                            }`}
                    >
                        <svg
                            viewBox="0 0 20 20"
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        >
                            {abierto ? <path d="M5 10h10" /> : <path d="M5 10h10M10 5v10" />}
                        </svg>
                    </span>
                </button>
            </h3>

            <div
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-boton`}
                className={`grid transition-[grid-template-rows,visibility] duration-300 motion-reduce:transition-none ${abierto ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="m-0 max-w-[560px] pb-6 text-[17px] leading-[1.5] text-[#595959]">
                        {respuesta}
                    </p>
                </div>
            </div>
        </div>
    );
}

function FAQ() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-titulo"
            className="bg-white text-black"
        >
            <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
                <header className="lg:sticky lg:top-28 lg:self-start">
                    <h2
                        id="faq-titulo"
                        className="scroll-mt-32 text-[clamp(2.25rem,5vw,3.125rem)] font-normal leading-[0.95] tracking-[-0.04em] [text-wrap:balance]"
                    >
                        Preguntas Frecuentes
                    </h2>
                    <p className="mt-6 max-w-[520px] text-[19px] leading-[1.35] tracking-[-0.03em] text-[#595959]">
                        Respuestas rápidas sobre planes, sucursales y horarios.
                    </p>
                </header>

                <div className="divide-y divide-[#e5e7eb] border-y border-[#e5e7eb]">
                    {faqs.map((faq, index) => (
                        <PreguntaItem
                            key={faq.pregunta}
                            id={`faq-${index}`}
                            pregunta={faq.pregunta}
                            respuesta={faq.respuesta}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
