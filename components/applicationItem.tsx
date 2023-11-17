"use client"

import React, { useState, useEffect } from 'react';
import getPosition from "@/actions/get-position";
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';
import Modal from '@/components/ui/modal';

const ApplicationItem: React.FC<{ application: any; user: any }> = ({ application, user }) => {
  const [positionName, setPositionName] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchPositionName = async (positionId: string) => {
    const position = await getPosition(positionId);
    return position.name;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'HOLD':
        return 'bg-blue-500';
      case 'APPROVED':
        return 'bg-green-500';
      case 'DISAPPROVED':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusContent = (status: string) => {
    switch (status) {
      case 'HOLD':
        return 'A la espera';
      case 'APPROVED':
        return 'Seleccionado';
      case 'DISAPPROVED':
        return 'No seleccionado';
      default:
        return '';
    }
  };

  useEffect(() => {
    fetchPositionName(application.positionId).then(setPositionName);
  }, [application.positionId]);

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/users/${user.id}`;

  const cancelApplication = async () => {
    setIsModalOpen(true);
    try {
      // Llamada a PATCH en el servidor para cancelar la postulación
      const response = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          positionId: null, // Envía null para indicar que quieres eliminar la posición
        }),
      });

      if (response.ok) {

        toast.success('Postulación cancelada con éxito');
      } else {
        toast.error('Error al cancelar la postulación');
      }
    } catch (error) {
      toast.error('Error al cancelar la postulación');
    }
  };

  const handleConfirmCancel = async () => {
    // Close the modal immediately
    setIsModalOpen(false);

    try {
      // Llamada a PATCH en el servidor para cancelar la postulación
      const response = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          positionId: null,
        }),
      });

      if (response.ok) {
        // Actualizar la interfaz o realizar alguna acción después de la cancelación
        toast.success('Postulación cancelada con éxito');
      } else {
        toast.error('Error al cancelar la postulación');
      }
    } catch (error) {
      toast.error('Error al cancelar la postulación');
    }
  };

  const handleCancelModal = () => {
    // Close the modal without taking any action
    setIsModalOpen(false);
  };

  return (
    <div key={application.id} className="flex flex-col space-y-4 mb-4 md:flex-row md:space-x-4 md:space-y-0 border p-5 rounded-3xl">
      <Button type="button" className={`w-full rounded-3xl px-4 py-2 md:w-1/3`}>
        {positionName || <Spinner />}
      </Button>
      <Button type="button" className={`w-full rounded-3xl px-4 py-2 md:w-1/3 ${getStatusColor(application.status)}`}>
        {getStatusContent(application.status)}
      </Button>
      <Button type="button" className={`w-full rounded-3xl px-4 py-2 md:w-1/3 bg-red-500`} onClick={() => setIsModalOpen(true)}>
        Cancelar Postulación
      </Button>

      {/* Confirmation Modal */}
      <Modal open={isModalOpen} onClose={handleCancelModal}>
        <div className="text-center">
          <p className='text-customBlue pb-5'>¿Estás seguro de que deseas cancelar la postulación?</p>
            <Button onClick={handleConfirmCancel} className='px-8 rounded-3xl me-5'>Sí</Button>
            <Button onClick={handleCancelModal} className='px-7 rounded-3xl'>No</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ApplicationItem;