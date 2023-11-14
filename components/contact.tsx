"use client"

import React, { useState } from 'react';
import Container from './ui/container';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.name,
          email: formData.email,
          message: formData.message, // Include message
        }),
      });
      // Handle response here
    } catch (error) {
      // Handle error here
    }
  };


  return (
    <div className='bg-customGrey'>
      <div className="mx-auto md:max-w-7xl md:px-[3%]">
        <div className="flex">
          {/* Imagen en la mitad izquierda */}
          <div className="w-1/2">
            <div
              style={{
                backgroundImage: 'url(/images/contactForm.png)',
              }}
              className="w-full h-full max-h-[800px] bg-cover bg-center"
            />
          </div>

          {/* Formulario en la mitad derecha */}
          <div className="w-1/2 p-4 align-middle my-auto">
            <h2 className="text-2xl text-center text-customBlue font-bold mb-4">ENVIANOS TU CONSULTA</h2>

            {/* Formulario */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-1 w-full border bg-transparent border-customBlue rounded-3xl text-customBlue"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-1 w-full border bg-transparent border-customBlue rounded-3xl text-customBlue"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  className="mt-1 p-1 w-full border bg-transparent border-customBlue rounded-3xl text-customBlue"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-1 text-white bg-customOrange rounded-3xl hover:bg-customBlue focus:outline-none focus:bg-customBlue-dark"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;