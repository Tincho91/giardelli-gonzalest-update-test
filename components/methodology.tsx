import Container from "./ui/container";
import FadeInFromLeft from "./animations/fadeInFromLeft";
import FadeInFromRight from "./animations/fadeInFromRight";

const Methodology = () => {
  return (
    <div id="metodologia" className="bg-customBlue relative pt-10">
      <Container>
        <div className="flex justify-center items-center pb-10">
          <div className="bg-white w-full flex justify-center p-2">
            <p className="font-[900] text-[7vw] md:text-[4vw] xl:text-[55px] text-customBlue w-full text-center">
              ¿CÓMO LO HACEMOS?
            </p>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 pb-10 items-center">
          <div className="md:col-start-1 md:col-end-2 flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p className="text-white text-center text-lg md:text-xl lg:text-2xl mb-4 md:mb-0">
              El trabajo de la consultora comienza con una entrevista de mutuo conocimiento en la que evaluamos la pertinencia de un futuro trabajo conjunto y sus diferentes instancias posibles de intervención.
              A partir de esa definición inicial, profundizamos el conocimiento de la organización llevando a cabo un  proceso diagnóstico.
              Posteriormente, presentamos el relevamiento realizado y proponemos un plan de trabajo conjunto, estableciendo objetivos, tiempos y sus correspondientes indicadores de medición.
            </p>
          </div>
          <div className="md:col-start-2 md:col-end-3 flex justify-center mb-4 md:mb-0">
            <img
              src="/images/metodologia2.png" // replace with your image path
              alt="Descripción de la imagen"
              className="object-contain w-full"
            />
          </div>
          <div className="md:col-start-1 md:col-end-3 items-center">
            <p className="text-white text-center text-lg md:text-xl lg:text-2xl mt-4 md:mt-0">
              Realizamos intervenciones que permiten pensar el negocio desde sus diversas aristas. Las mismas redundan en un proceso virtuoso de transformación.
            </p>
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Methodology;