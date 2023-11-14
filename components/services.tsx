"use client"

import React, { useState } from "react";
import Container from "./ui/container";



const Services = () => {

  return (
    <div className='bg-white relative py-10'>
      {/* Vector image positioned at the top, spanning full width */}
      <img src="/images/vector.png" alt="Vector" className="absolute top-0 left-0 right-0 w-full hidden md:block md:mt-[0]" />
      {/* Title above the vector */}
      <div className="h-[150px] w-full bg-customBlue absolute top-0 z-10">
        <Container>
          <p className="font-extrabold overflow-hidden text-[8vw] md:text-[4.4vw] xl:text-[60px] text-white absolute left-0 md:left-[3%] xl:left-10 w-full bottom-[15px] md:bottom-0 lg:bottom-[-50%] xl:bottom-[-70%] text-center md:text-left md:mb-[-7px] lg:mb-[-10px] xl:mb-[-12px]">
            ¿QUE HACEMOS?
          </p>
        </Container>
      </div>

      <div className="pt-10">
        <Container>
          <div className="flex flex-col md:flex-row pt-20 md:pt-[17vw] md:mt-0">
            <div className="flex flex-col w-full md:w-1/2">
              {/* Rows for the left column */}
              <div className="bg-white p-4 text-customBlue text-center text-[2.2vw] xl:text-4xl leading-[250%] xl:leading-[150%] py-5">Generamos cambios en los sistemas empresariales por medio de modificaciones en la estructura y en los procesos vigentes.</div>
              <div className="bg-customBlue p-4 text-white text-center text-[2.2vw] xl:text-4xl leading-[250%] xl:leading-[150%] py-5">Intervenimos en los proceso de traspaso intergeneracional en empresas de familia, propiciando un pasaje saludable y armónico de la gestión y la propiedad.</div>
              <div className="bg-white p-4 text-customBlue text-center text-[2.2vw] xl:text-4xl leading-[250%] xl:leading-[150%] py-5">Realizamos capacitaciones para gestar transformaciones a partir del desarrollo de saberes y habilidades.</div>
              <div className="bg-customBlue p-4 text-white text-center text-[2.2vw] xl:text-4xl leading-[250%] xl:leading-[150%] py-5">Desarrollamos el área de recursos humanos de manera externa para que luego se integre a la dinámica de la empresa y se convierta en una fortaleza .</div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 md:pt-[18vw]">
              {/* Rows for the right column */}
              <div className="bg-white p-4 text-customBlue text-center text-[2.2vw] xl:text-4xl leading-[250%] xl:leading-[150%] py-5">Construimos junto a nuestros clientes nuevos modelos para la toma de decisiones que favorecen la gestión y la calidad de vida de quienes trabajan en la organización.</div>
              <div className="bg-customBlue p-4 text-white text-center text-[2.2vw] xl:text-4xl leading-[250%] xl:leading-[150%] py-5">Seleccionamos mandos medios y cargos gerenciales y creamos las condiciones necesarias para la inclusión de nuevos talentos que agreguen valor.</div>
              <div className="bg-white p-4 text-customBlue text-center text-[2.2vw] xl:text-4xl leading-[250%] xl:leading-[150%] py-5">Estructuramos cambios generados a partir de nuevas dinámicas en los sistemas de comercialización.</div>
            </div>
          </div>
        </Container>


      </div>


    </div>
  );
};



export default Services;