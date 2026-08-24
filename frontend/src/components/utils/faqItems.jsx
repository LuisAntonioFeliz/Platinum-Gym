import { useState } from "react";

function FAQItem({ pregunta, respuesta }) {
    const [abierta, setAbierta] = useState(false);

    return (
        <div
            // Aumentamos el ancho en pantallas medianas y grandes para que respire mejor en la PC
            className={`my-[10px] w-[100%] sm:w-[85%] md:w-[75%] lg:w-[100%] bg-slate ${abierta ? "abierta" : ""
                }`}
        >
            <button
                className="faq-toggle flex w-full cursor-pointer items-center justify-between border-0 bg-azul px-5 sm:px-6 py-4 text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-white outline-none text-left gap-4"
                onClick={() => setAbierta(!abierta)}
            >
                <span>{pregunta}</span>
                <span className="icon bg-white text-azul px-3 py-0.5 rounded flex-shrink-0 font-bold">
                    {abierta ? "-" : "+"}
                </span>
            </button>
            <div
                className={`respuesta text-[15px] sm:text-[17px] font-normal transition-all duration-500 ${abierta
                        ? "pointer-events-auto max-h-[500px] translate-y-0 border border-azul p-4 sm:p-5 opacity-100 bg-white"
                        : "pointer-events-none max-h-0 -translate-y-5 opacity-0 overflow-hidden"
                    }`}
            >
                <p>{respuesta}</p>
            </div>
        </div>
    );
}

export default FAQItem;
