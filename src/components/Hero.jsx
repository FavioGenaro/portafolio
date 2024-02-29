import foto from "../assets/cv-foto.jpg"

const Hero = () => {

    return (
        <section className="m-auto w-autow-full mx-auto container py-16 md:py-36 w-full lg:max-w-3xl md:max-w-2xl">
            <div className="image-state flex items-center justify-center sm:justify-normal flex-col sm:flex-row gap-4">
                <div className="image">
                    <img src={foto} alt="foto de perfil" className="rounded-full shadow-lg size-32" />
                </div>
                <div className="state px-3 py-1 text-sm text-green-900 bg-green-100 border-2 border-lime-400 rounded-full cursor-pointer">
                    <a href="https://www.linkedin.com/in/favio-saico">Disponible para trabajar</a>
                </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
                Favio Saico
            </h1>
            <p className="mt-6 text-xl text-gray-800 dark:text-white">
                Estudiante de <strong>Ingeniería de Software</strong> de Lima, Perú 🇵🇪. Especializado en el desarrollo de aplicaciones web.
            </p>
        </section>
    )
}

export default Hero;