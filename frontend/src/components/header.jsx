import { useState, useEffect } from "react";

const enlaces = [
    { href: "#planes-titulo", texto: "Planes" },
    { href: "#testimonios-titulo", texto: "Testimonios" },
    { href: "#sucursales-titulo", texto: "Sucursales" },
    { href: "#faq-titulo", texto: "FAQs" },
    { href: "#contacto", texto: "Contacto" },
];

const pildoraAzul =
    "inline-flex items-center justify-center rounded-full bg-azul px-6 py-3 text-[15px] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-colors duration-200 hover:bg-[#1c54b2] visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const enfoqueBlanco =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

function Header() {
    const [abierto, setAbierto] = useState(false);

    // Cerrar con Escape
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setAbierto(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <header
            id="cabecera"
            className="sticky top-0 z-50 border-b border-white/10 bg-black text-white"
        >
            <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
                {/*
                    El logo se muestra en blanco (filtro brightness-0 + invert) para
                    que se lea sobre el fondo negro. Si tienes una versión blanca del
                    logo con fondo transparente, úsala aquí y quita el filtro.
                */}
                <a href="#main" className={`shrink-0 rounded-full ${enfoqueBlanco}`}>
                    <img
                        src="/Imagenes/Logo.png"
                        alt="Logo de Platinum Gym"
                        className="h-10 w-auto brightness-0 invert"
                    />
                </a>

                {/* Navegación de escritorio */}
                <nav aria-label="Principal" className="hidden lg:block">
                    <ul className="m-0 flex list-none items-center gap-8 p-0">
                        {enlaces.map((enlace) => (
                            <li key={enlace.href}>
                                <a
                                    href={enlace.href}
                                    className={`rounded-full text-[15px] font-medium uppercase tracking-[0.1em] text-white/80 no-underline transition-colors duration-200 hover:text-white ${enfoqueBlanco}`}
                                >
                                    {enlace.texto}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href="#inscripcion"
                    className={`hidden lg:inline-flex ${pildoraAzul}`}
                >
                    Inscríbete
                </a>

                {/* Botón de menú (móvil y tablet) */}
                <button
                    id="abrirMenu"
                    type="button"
                    onClick={() => setAbierto((valor) => !valor)}
                    aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={abierto}
                    aria-controls="menu"
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-200 hover:border-white lg:hidden ${enfoqueBlanco}`}
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        aria-hidden="true"
                    >
                        {abierto ? (
                            <path d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <path d="M4 8h16M4 16h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Panel de navegación móvil: se superpone al contenido sin desplazarlo */}
            <nav
                id="menu"
                aria-label="Menú móvil"
                className={`absolute inset-x-0 top-full bg-black transition-[max-height,visibility] duration-300 motion-reduce:transition-none lg:hidden ${abierto
                        ? "visible max-h-[calc(100svh-5rem)] overflow-y-auto border-b border-white/10"
                        : "invisible max-h-0 overflow-hidden"
                    }`}
            >
                <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-2 sm:px-8">
                    <ul className="m-0 list-none p-0">
                        {enlaces.map((enlace) => (
                            <li key={enlace.href} className="border-b border-white/10">
                                <a
                                    href={enlace.href}
                                    onClick={() => setAbierto(false)}
                                    className={`block py-4 text-[24px] font-semibold leading-none tracking-[-0.03em] text-white no-underline ${enfoqueBlanco}`}
                                >
                                    {enlace.texto}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#inscripcion"
                        onClick={() => setAbierto(false)}
                        className={`mt-8 w-full ${pildoraAzul}`}
                    >
                        Inscríbete
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
