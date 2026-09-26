const redes = [
    {
        href: "https://www.facebook.com",
        nombre: "Facebook",
        icono: "bi bi-facebook",
        id: "faceboox",
    },
    {
        href: "https://www.youtube.com",
        nombre: "YouTube",
        icono: "bi bi-youtube",
        id: "youtube",
    },
    {
        href: "https://www.instagram.com/",
        nombre: "Instagram",
        icono: "bi bi-instagram",
        id: "instagram",
    },
];

function Footer() {
    return (
        <footer
            id="pie"
            className="border-t border-white/10 bg-[#191919] text-white"
        >
            <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row sm:px-8">
                <p className="m-0 text-[14px] leading-[1.59] text-[#999999]">
                    &copy; {new Date().getFullYear()} Luis Feliz
                </p>
                <div className="social-icons flex items-center gap-3">
                    {redes.map((red) => (
                        <a
                            key={red.nombre}
                            href={red.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={red.nombre}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-[18px] text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            <i className={red.icono} id={red.id} aria-hidden="true"></i>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
