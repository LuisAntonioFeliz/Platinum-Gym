import { useState, useEffect } from "react";

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
            className="sticky top-0 z-[1000] flex items-center justify-between border-b-[1.5px] border-azul bg-platino"
        >
            <a href="#main">
                <img
                    src="/Imagenes/Logo.png"
                    alt="Logo de Platinum Gym"
                    className="h-auto max-w-[150px]"
                />
            </a>
            <button
                id="abrirMenu"
                onClick={() => setAbierto(!abierto)}
                className="block cursor-pointer border-0 bg-transparent text-[24px] max-md:absolute max-md:right-[50px] md:hidden"
            >
                ☰
            </button>
            <nav
                id="menu"
                className={`max-md:absolute max-md:right-0 max-md:top-[70px] max-md:w-full max-md:flex-col max-md:overflow-hidden max-md:rounded-lg max-md:bg-platino max-md:shadow-lg max-md:transition-all max-md:duration-1000 ${abierto
                        ? "max-md:max-h-[500px] max-md:translate-y-0"
                        : "max-md:max-h-0 max-md:-translate-y-5"
                    }`}
            >
                <ul className="flex list-none gap-8 max-md:m-0 max-md:flex-col max-md:gap-4 max-md:list-none max-md:p-0">
                    <li className="mx-4 max-md:my-[10px]">
                        <a
                            href="#planes-titulo"
                            onClick={() => setAbierto(false)}
                            className="mx-4 text-[18px] font-semibold text-black no-underline hover:underline"
                        >
                            Planes
                        </a>
                    </li>
                    <li className="mx-4 max-md:my-[10px]">
                        <a
                            href="#testimonios-titulo"
                            onClick={() => setAbierto(false)}
                            className="mx-4 text-[18px] font-semibold text-black no-underline hover:underline"
                        >
                            Testimonios
                        </a>
                    </li>
                    <li className="mx-4 max-md:my-[10px]">
                        <a
                            href="#sucursales-titulo"
                            onClick={() => setAbierto(false)}
                            className="mx-4 text-[18px] font-semibold text-black no-underline hover:underline"
                        >
                            Sucursales
                        </a>
                    </li>
                    <li className="mx-4 max-md:my-[10px]">
                        <a
                            href="#inscripcion"
                            onClick={() => setAbierto(false)}
                            className="mx-4 text-[18px] font-semibold text-black no-underline hover:underline"
                        >
                            Inscribete
                        </a>
                    </li>
                    <li className="mx-4 max-md:my-[10px]">
                        <a
                            href="#faq-titulo"
                            onClick={() => setAbierto(false)}
                            className="mx-4 text-[18px] font-semibold text-black no-underline hover:underline"
                        >
                            FAQs
                        </a>
                    </li>
                    <li className="mx-4 max-md:my-[10px]">
                        <a
                            href="#contacto"
                            onClick={() => setAbierto(false)}
                            className="mx-4 text-[18px] font-semibold text-black no-underline hover:underline"
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;