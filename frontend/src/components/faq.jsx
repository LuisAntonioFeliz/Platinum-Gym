import FAQItem from "./utils/faqItems";

function FAQ() {
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

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2
                id="faq-titulo"
                className="mt-6 mb-6 text-center text-2xl sm:text-[28px] font-semibold text-azul scroll-mt-[90px]"
            >
                Preguntas Frecuentes
            </h2>
            <section id="faq" className="flex flex-col items-center w-full gap-3">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        pregunta={faq.pregunta}
                        respuesta={faq.respuesta}
                    />
                ))}
            </section>
        </div>
    );
}

export default FAQ;
