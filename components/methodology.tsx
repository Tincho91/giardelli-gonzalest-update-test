import Container from "./ui/container";

const Methodology = () => {
  return (
    <div id="metodologia" className="bg-customBlue flex flex-col items-center justify-center relative pt-[120px] w-full">
      {/* White stripe at the top */}

      <div className="h-[150px] w-full bg-white absolute top-0">
        <Container>
          <p className="font-extrabold overflow-hidden text-[10vw] sm:text-6xl md:text-[6.5vw] xl:text-[85px] text-customBlue absolute w-full bottom-0 text-center md:text-left mb-[-4.2%] sm:mb-[-10px] md:mb-[-11px] lg:mb-[-12px] xl:mb-[-15px]">
            METODOLOGÍA
          </p>
        </Container>
      </div>

      <div className="md:hidden">
        <Container>
          {/* Image with overlay */}
          <div>
            <div className="relative my-10">
              <img src="/images/metodologia1.png" alt="Metodologia" className="w-full max-w-90 mx-auto" />
              <div className="absolute top-0 left-0 w-full h-full bg-customBlue-dark opacity-70"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
                <p className="text-white text-center text-xl sm:text-2xl md:text-7xl">
                  El trabajo de la consultora comienza con una entrevista de mutuo conocimiento en la que definimos las diferentes instancias de intervención.
                  Luego, en el transcurso del diagnóstico y el plan de acción a implementar, delineamos el trabajo conjunto a realizar entre las personas que definimos como estratégicas en la organización y nuestro equipo.
                </p>
              </div>
            </div>
            <div className="relative my-10">
              <img src="/images/metodologia2.png" alt="Metodologia" className="w-[500px] max-w-90 mx-auto" />
              <div className="absolute top-0 left-0 w-full h-full bg-customBlue-dark opacity-70"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
                <p className="text-white text-center text-xl sm:text-2xl md:text-7xl">
                  Realizamos intervenciones que permiten pensar el negocio desde sus diversas aristas. Las mismas redundan en un proceso virtuoso de transformaciones gestadas por sus protagonistas.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="hidden md:block">
        <Container>
          <div className="grid grid-cols-2 gap-6 mb-10 mt-[-25px]">

            <div className="relative flex items-center justify-center mt-[25px]">
              <p className="text-white text-center text-[2.2vw] xl:text-4xl leading-[250%] xl:leading-[150%]">
                El trabajo de la consultora comienza con una entrevista de mutuo conocimiento en la que definimos las diferentes instancias de intervención.
                Luego, en el transcurso del diagnóstico y el plan de acción a implementar, delineamos el trabajo conjunto a realizar entre las personas que definimos como estratégicas en la organización y nuestro equipo.
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <img src="/images/metodologia1.png" alt="Metodologia" className="w-full max-w-90 mx-auto" />
            </div>

            <div className="relative flex items-center justify-center">
              <img src="/images/metodologia2.png" alt="Metodologia" className="w-[500px] max-w-90 mx-auto" />
            </div>

            <div className="relative flex items-center justify-center">
              <p className="text-white text-center text-[2.2vw] xl:text-4xl leading-[250%] xl:leading-[150%]">
                Realizamos intervenciones que permiten pensar el negocio desde sus diversas aristas. Las mismas redundan en un proceso virtuoso de transformaciones gestadas por sus protagonistas.
              </p>
            </div>

          </div>
        </Container>
      </div>

    </div>
  )
}

export default Methodology;