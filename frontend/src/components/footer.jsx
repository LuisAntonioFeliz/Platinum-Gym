function Footer() {
    return (
        <footer
            id="pie"
            className="flex items-center justify-between bg-black px-8 py-4 text-center text-white"
        >
            <p className="text-sm text-white">
                &copy; {new Date().getFullYear()} Luis Antonio Feliz Mambrú
            </p>
            <div className="social-icons">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="mx-4 text-xl text-white transition-colors duration-300 hover:text-azul"
                >
                    <i className="bi bi-facebook" id="faceboox"></i>
                </a>
                <a
                    href="https://www.youtube.com"
                    target="_blank"
                    className="mx-4 text-xl text-white transition-colors duration-300 hover:text-azul"
                >
                    <i className="bi bi-youtube" id="youtube"></i>
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="mx-4 text-xl text-white transition-colors duration-300 hover:text-azul"
                >
                    <i className="bi bi-instagram" id="instagram"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;