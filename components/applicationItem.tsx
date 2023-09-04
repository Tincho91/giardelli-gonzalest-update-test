"use client"

import React, { useState, FormEvent, useEffect } from 'react';
import getPosition from "@/actions/get-position";

import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';

const ApplicationItem: React.FC<{ application: any }> = ({ application }) => {
  const [positionName, setPositionName] = useState<string | null>(null);
  
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

  useEffect(() => {
    fetchPositionName(application.positionId).then(setPositionName);
  }, [application.positionId]);

  return (
    <div key={application.id} className="flex space-x-4 mb-4">
      <Button type="button" className={`w-1/3 rounded-md px-4 py-2`}>
        {positionName || <Spinner />}
      </Button>
      <Button type="button" className={`w-1/3 rounded-md px-4 py-2 ${getStatusColor(application.status)}`}>
        {application.status}
      </Button>
      <Button type="button" className="w-1/3 rounded-md px-4 py-2 bg-red-500">
        Cancelar Postulación
      </Button>
    </div>
  );
};

export default ApplicationItem;