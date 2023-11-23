"use client"

import React, { useState } from "react";
import Container from "./ui/container";

import FadeIn from "./animations/fadeIn";


const Services = () => {

  return (
    <div className='bg-white relative pt-10' id="servicios">
      {/* Vector image positioned at the top, spanning full width */}
      <img src="/images/vector.png" alt="Vector" className="absolute top-0 left-0 right-0 w-full hidden md:block md:mt-[0] z-10" />
      <img src="/images/heroFooterBanner.png" alt="team" className="absolute top-0 w-full z-0 h-full object-cover object-top"/>
      {/* Title above the vector */}
      <div className="h-[150px] w-full bg-customBlue absolute top-0 z-10">
        <Container>
          <p className="font-[900] overflow-hidden text-[7vw] md:text-[4vw] xl:text-[55px] text-white absolute left-0 md:left-[3%] xl:left-10 w-full bottom-[15px] md:bottom-0 lg:bottom-[-50%] xl:bottom-[-70%] text-center md:text-left md:mb-[-7px] lg:mb-[-10px] xl:mb-[-12px]">
            ¿QUÉ HACEMOS?
          </p>
        </Container>
      </div>

      <div className="pt-10 relative bg-white bg-opacity-75">
        <div className="mx-auto md:max-w-7xl">
          <div className="flex flex-col md:flex-row pt-20 md:pt-[17vw] md:mt-0">
            <div className="flex flex-col w-full md:w-1/2">
              {/* Rows for the left column */}

              <div className="bg-transparent p-4 md:pl-[3%] text-customBlue text-center lg:text-lg leading-[45px] lg:leading-[60px] py-5">
                <FadeIn>
                  <p>
                    Generamos cambios en los <span className="font-bold"> sistemas empresariales</span> por medio de modificaciones en la estructura y en los procesos vigentes.
                  </p>
                </FadeIn>
              </div>

              <div className="bg-customBlue p-4 md:pl-[3%] text-white text-center lg:text-lg leading-[45px] lg:leading-[60px] py-8">
                <FadeIn>
                  <p>
                    Intervenimos en los proceso de<span className="font-bold">traspaso intergeneracional </span> en empresas de familia, propiciando un pasaje saludable y armónico de la gestión y la propiedad.
                  </p>
                </FadeIn>
              </div>

              <div className="bg-transparent p-4 md:pl-[3%] text-customBlue text-center lg:text-lg leading-[45px] lg:leading-[60px] py-5">
                <FadeIn>
                  <p>
                    Realizamos <span className="font-bold"> capacitaciones</span> para gestar transformaciones a partir del desarrollo de saberes y habilidades.
                  </p>
                </FadeIn>
              </div>

              <div className="bg-customBlue p-4 md:pl-[3%] text-white text-center lg:text-lg leading-[45px] lg:leading-[60px] py-8">
                <FadeIn>
                  <p>
                    Desarrollamos el área de <span className="font-bold"> recursos humanos</span> de manera externa para que luego se integre a la dinámica de la empresa y se convierta en una fortaleza.
                  </p>
                </FadeIn>
              </div>

            </div>
            <div className="flex flex-col w-full md:w-1/2 md:pt-[15%]">
              {/* Rows for the right column */}

              <div className="bg-transparent p-4 md:pr-[3%] text-customBlue text-center lg:text-lg leading-[45px] lg:leading-[60px] py-5">
                <FadeIn>
                  <p>
                    Construimos junto a nuestros clientes nuevos modelos para la <span className="font-bold"> toma de decisiones</span> que favorecen la gestión y la calidad de vida de quienes trabajan en la organización.
                  </p>
                </FadeIn>
              </div>

              <div className="bg-customBlue p-4 md:pr-[3%] text-white text-center lg:text-lg leading-[45px] lg:leading-[60px] py-8">
                <FadeIn>
                  <p>
                    Seleccionamos mandos medios y cargos gerenciales y creamos las condiciones necesarias para la inclusión de <span className="font-bold"> nuevos talentos</span> que agreguen valor.
                  </p>
                </FadeIn>
              </div>

              <div className="bg-transparent p-4 md:pr-[3%] text-customBlue text-center lg:text-lg leading-[45px] lg:leading-[60px] py-5">
                <FadeIn>
                  <p>
                    Estructuramos cambios generados a partir de <span className="font-bold"> nuevas dinámicas</span> en los sistemas de comercialización.
                  </p>
                </FadeIn>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[120px] w-full bg-customBlue mt-[-1%] z-10 relative"></div>
    </div>
  );
};



export default Services;