function Hero() {
    return (
        <section
            id="main"
            className="relative z-[1] flex h-[60vh] flex-col items-center justify-center bg-[url('/Imagenes/Hero.jpg')] bg-cover bg-center max-md:h-[50vh]"
        >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 to-black/80"></div>
            <h1
                title="Encabezado principal"
                className="my-8 text-center text-[48px] font-bold text-azul max-md:text-[32px]"
            >
                Transforma tu cuerpo con tecnología
            </h1>
            <a
                href="#inscripcion"
                className="inline-block rounded-md border-0 bg-azul px-6 py-3 text-center text-[20px] font-bold text-white visited:text-white hover:bg-[#1c54b2] max-md:px-4 max-md:py-2 max-md:text-[16px]"
            >
                Inscribete ya
            </a>
        </section>
    );
}

export default Hero;