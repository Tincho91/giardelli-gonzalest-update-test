"use client"

import React, { useState } from "react";
import Container from "./ui/container";



const Services = () => {

  return (
    <div className='bg-white relative pt-10' id="servicios">
      {/* Vector image positioned at the top, spanning full width */}
      <img src="/images/vector.png" alt="Vector" className="absolute top-0 left-0 right-0 w-full hidden md:block md:mt-[0]" />
      {/* Title above the vector */}
      <div className="h-[150px] w-full bg-customBlue absolute top-0 z-10">
        <Container>
          <p className="font-[900] overflow-hidden text-[7vw] md:text-[4vw] xl:text-[55px] text-white absolute left-0 md:left-[3%] xl:left-10 w-full bottom-[15px] md:bottom-0 lg:bottom-[-50%] xl:bottom-[-70%] text-center md:text-left md:mb-[-7px] lg:mb-[-10px] xl:mb-[-12px]">
            ¿QUE HACEMOS?
          </p>
        </Container>
      </div>

      <div className="pt-10">
        <Container>
          <div className="flex flex-col md:flex-row pt-20 md:pt-[17vw] md:mt-0">
            <div className="flex flex-col w-full md:w-1/2">
              {/* Rows for the left column */}
              <div className="bg-white p-4 text-customBlue text-center lg:text-lg leading-[45px] lg:leading-[60px] py-5">Generamos cambios en los <span className="font-bold"> sistemas empresariales</span> por medio de modificaciones en la estructura y en los procesos vigentes.</div>
              <div className="bg-customBlue p-4 text-white text-center lg:text-lg leading-[45px] lg:leading-[60px] py-8">Intervenimos en los proceso de <span className="font-bold">traspaso intergeneracional </span>en empresas de familia, propiciando un pasaje saludable y armónico de la gestión y la propiedad.</div>
              <div className="bg-white p-4 text-customBlue text-center lg:text-lg leading-[45px] lg:leading-[60px] py-5">Realizamos <span className="font-bold"> capacitaciones</span> para gestar transformaciones a partir del desarrollo de saberes y habilidades.</div>
              <div className="bg-customBlue p-4 text-white text-center lg:text-lg leading-[45px] lg:leading-[60px] py-8">Desarrollamos el área de <span className="font-bold"> recursos humanos</span> de manera externa para que luego se integre a la dinámica de la empresa y se convierta en una fortaleza .</div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 md:pt-[15%]">
              {/* Rows for the right column */}
              <div className="bg-white p-4 text-customBlue text-center lg:text-lg leading-[45px] lg:leading-[60px] py-5">Construimos junto a nuestros clientes nuevos modelos para la <span className="font-bold"> toma de decisiones</span> que favorecen la gestión y la calidad de vida de quienes trabajan en la organización.</div>
              <div className="bg-customBlue p-4 text-white text-center lg:text-lg leading-[45px] lg:leading-[60px] py-8">Seleccionamos mandos medios y cargos gerenciales y creamos las condiciones necesarias para la inclusión de <span className="font-bold"> nuevos talentos</span> que agreguen valor.</div>
              <div className="bg-white p-4 text-customBlue text-center lg:text-lg leading-[45px] lg:leading-[60px] py-5">Estructuramos cambios generados a partir de <span className="font-bold"> nuevas dinámicas</span> en los sistemas de comercialización.</div>
            </div>
          </div>
        </Container>
        <div className="min-h-[50px] max-h-[129px] w-full bg-customBlue"></div>
      </div>
    </div>
  );
};



export default Services;