"use client";

import React, { useState } from "react";
import Container from "./ui/container";
import { Button } from './ui/button';
import Modal from "./ui/modal";

interface ServicesProps { }

const Services: React.FC<ServicesProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState<React.ReactNode>('');

  const openModal = (title: string, content: string, wordsToBold: string[] = []) => {
    setModalTitle(title);
  
    const formattedContent = () => {
      const words = content.split(' ');
  
      return words.map((word, index) => {
        const isBold = wordsToBold.includes(word);
  
        return isBold ? (
          <span key={index} className="font-semibold">
            {word}
          </span>
        ) : (
          <span key={index}>{word}</span>
        );
      });
    };
  
    // Create the JSX structure for the modal content
    const modalContentJSX = formattedContent().map((element, index) => (
      <React.Fragment key={index}>{element} </React.Fragment>
    ));
  
    setModalContent(modalContentJSX);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="servicios" className="bg-customGrey flex flex-col items-center justify-center relative pt-[120px] w-full">
      {/* White stripe at the top */}
      <div className="h-[150px] w-full bg-customBlue absolute top-0 overflow-hidden">
        <Container>
          <p className="font-extrabold text-[10vw] sm:text-6xl md:text-[6.5vw] xl:text-[85px] text-white absolute w-full bottom-0 text-center md:text-left mb-[-4.2%] sm:mb-[-10px] md:mb-[-11px] lg:mb-[-12px] xl:mb-[-15px]">
            ¿Qué hacemos?
          </p>
        </Container>
      </div>

      <div>
        <Container>
          <div>
            <div className="mb-10 mt-[100px] grid grid-cols-2 gap-7">
              {/* First column */}
              <Button
                onClick={() => openModal('TRANSPASO GENERACIONAL', 'Facilitamos el traspaso generacional en empresas familiares', ['traspaso', 'generacional'])}
                className="flex items-center justify-center rounded-3xl border-2 border-solid border-customBlue bg-white shadow-md text-customBlue"
              >
                <p className="text-center mx-auto px-[10vw] py-1 whitespace-nowrap">TRANSPASO GENERACIONAL</p>
              </Button>
              <Button
                onClick={() => openModal('ESTRUCTURA Y ORGANIZACIÓN', 'Facilitamos el traspaso generacional en empresas familiares', ['traspaso', 'generacional'])}
                className="flex items-center justify-center rounded-3xl border-2 border-solid border-customBlue bg-white shadow-md text-customBlue"
              >
                <p className="text-center mx-auto px-[10vw] py-1 whitespace-nowrap">ESTRUCTURA Y ORGANIZACIÓN</p>
              </Button>
              <Button
                onClick={() => openModal('MODELOS DE GESTIÓN', 'Diseñamos nuevos modelos para la toma de decisiones que favorecen la gestión y la calidad de vida de quienes trabajan en la organización.', ['gestión', 'modelos'])}
                className="flex items-center justify-center rounded-3xl border-2 border-solid border-customBlue bg-white shadow-md text-customBlue"
              >
                <p className="text-center mx-auto px-[10vw] py-1 whitespace-nowrap">MODELOS DE GESTIÓN</p>
              </Button>
              <Button
                onClick={() => openModal('RECURSOS HUMANOS', 'Desarrollamos el área de recursos humanos de manera externa para que luego se integre a la dinámica de la empresa y se convierta en una fortaleza.', ['recursos', 'humanos'])}
                className="flex items-center justify-center rounded-3xl border-2 border-solid border-customBlue bg-white shadow-md text-customBlue"
              >
                <p className="text-center mx-auto px-[10vw] py-1 whitespace-nowrap">RECURSOS HUMANOS</p>
              </Button>

              {/* Second column */}
              <Button
                onClick={() => openModal('INCLUSIÓN DE TALENTOS', 'Seleccionamos mandos medios y cargos gerenciales y creamos las condiciones necesarias para la inclusión de nuevos talentos que agreguen valor.', ['Seleccionamos', 'nuevos', 'talentos'])}
                className="flex items-center justify-center rounded-3xl border-2 border-solid border-customBlue bg-white shadow-md text-customBlue"
              >
                <p className="text-center mx-auto px-[10vw] py-1 whitespace-nowrap">INCLUSIÓN DE TALENTOS</p>
              </Button>
              <Button
                onClick={() => openModal('CAPACITACIÓN', 'Realizamos capacitaciones para gestar transformaciones a partir del desarrollo de saberes y habilidades', ['capacitaciones'])}
                className="flex items-center justify-center rounded-3xl border-2 border-solid border-customBlue bg-white shadow-md text-customBlue"
              >
                <p className="text-center mx-auto px-[10vw] py-1 whitespace-nowrap">CAPACITACIÓN</p>
              </Button>
              <Button
                onClick={() => openModal('PLANES DE NEGOCIO', 'Estructuramos cambios generados a partir de nuevas dinámicas en los sistemas de comercialización.', ['sistemas', 'comercialización.'])}
                className="flex items-center justify-center rounded-3xl border-2 border-solid border-customBlue bg-white shadow-md text-customBlue"
              >
                <p className="text-center mx-auto px-[10vw] py-1 whitespace-nowrap">PLANES DE NEGOCIO</p>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Modal open={isModalOpen} onClose={closeModal}>
        <div className="bg-white text-center">
          <h2 className="text-2xl font-semibold text-customBlue">{modalTitle}</h2>
          <div className="my-10 text-customBlue">
            {modalContent}
          </div>
        </div>
      </Modal>
    </div>
  );
};



export default Services;