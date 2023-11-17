import Container from "./ui/container";
import FadeInFromLeft from "./animations/fadeInFromLeft";
import FadeInFromRight from "./animations/fadeInFromRight";

const Methodology = () => {
  return (
    <div id="metodologia" className="bg-customBlue flex flex-col items-center justify-center relative pt-[120px] w-full">
      {/* White stripe at the top */}

      <div className="h-[150px] w-full bg-white absolute top-0 ">
        <p className="font-[900] overflow-hidden text-[7vw] md:text-[4vw] xl:text-[55px] text-customBlue absolute left-0 md:left-[1%] xl:left-[0%] w-full bottom-[15px] md:bottom-0 text-center md:text-left md:mb-[-17px] lg:mb-[-19px] xl:mb-[-27px]">
          ¿CÓMO LO HACEMOS?
        </p>
      </div>

      <div className="md:hidden">
        <Container>
          {/* Image with overlay */}
          <div>
            <div className="relative my-10">
              <img src="/images/metodologia1.png" alt="Metodologia" className="w-full max-w-90 mx-auto" />
              <div className="absolute top-0 left-0 w-full h-full bg-customBlue-dark opacity-70"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
                <p className="text-white text-center lg:text-lg leading-[45px] lg:leading-[60px]">
                  El trabajo de la consultora comienza con una entrevista de mutuo conocimiento en la que definimos las diferentes instancias de intervención. Luego, en el transcurso del diagnóstico y el plan de acción a implementar, delineamos el trabajo conjunto a realizar entre las personas que definimos como estratégicas en la organización y nuestro equipo.
                </p>
              </div>
            </div>
            <div className="relative my-10">
              <img src="/images/metodologia2.png" alt="Metodologia" className="w-[500px] max-w-90 mx-auto" />
              <div className="absolute top-0 left-0 w-full h-full bg-customBlue-dark opacity-70"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
                <p className="text-white text-center lg:text-lg leading-[45px] lg:leading-[60px]">
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
              <FadeInFromLeft>
                <p className="text-white text-center lg:text-lg leading-[45px] lg:leading-[60px]">
                  El trabajo de la consultora comienza con una entrevista de mutuo conocimiento en la que definimos las diferentes instancias de intervención.
                  Luego, en el transcurso del diagnóstico y el plan de acción a implementar, delineamos el trabajo conjunto a realizar entre las personas que definimos como estratégicas en la organización y nuestro equipo.
                </p>
              </FadeInFromLeft>
            </div>

            <div className="relative flex items-center justify-center">
              <img src="/images/metodologia1.png" alt="Metodologia" className="w-auto max-w-90 mx-auto max-h-[530px]" />
            </div>

            <div className="relative flex items-center justify-center">
              <img src="/images/metodologia2.png" alt="Metodologia" className="w-auto max-w-90 mx-auto max-h-[530px]" />
            </div>

            <div className="relative flex items-center justify-center">
              <FadeInFromRight>
                <p className="text-white text-center lg:text-lg leading-[45px] lg:leading-[60px]">
                  Realizamos intervenciones que permiten pensar el negocio desde sus diversas aristas. Las mismas redundan en un proceso virtuoso de transformaciones gestadas por sus protagonistas.
                </p>
              </FadeInFromRight>
            </div>

          </div>
        </Container>
      </div>
    </div>
  )
}

export default Methodology;