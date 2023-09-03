"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LogIn } from "lucide-react";
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { User } from '@/types';
import { useUser } from '@clerk/clerk-react';
import { Button } from "./ui/button";
import { Position } from "@/types";
import { Separator } from '@/components/ui/separator';
import getUsers from "@/actions/get-users";

interface InfoProps {
  data: Position;
  onClose?: () => void;
  isShortDescription?: boolean;
}

const Info: React.FC<InfoProps> = ({ data, onClose, isShortDescription }) => {
  const [currentUserData, setCurrentUserData] = useState<User | null>(null);
  const router = useRouter();
  const { user } = useUser();
  const clerkUserId = user?.id;

  useEffect(() => {
    const fetchUsers = async () => {
      const usersFromDB: User[] = await getUsers();
      const currentUser = usersFromDB.find(u => u.clerkId === clerkUserId);
      setCurrentUserData(currentUser ?? null);
    };
  
    fetchUsers();
  }, [user]);

  const handleApplyClick = async () => {
    try {
      if (currentUserData?.id) {
        const formData = {
          positionId: data?.id
        };
  
        const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/users/${currentUserData.id}`, formData);
  
        if (response.status === 200) {
          toast.success("Successfully applied for the position.");
          router.push(`/positions/${data.id}`);
        } else {
          toast.error("Failed to apply for the position.");
        }
      } else {
        toast.error("First, you need to complete your profile.");
      }
    } catch (error) {
      toast.error("An error occurred while applying for the position.");
      console.error("Error applying for position:", error);
    }
  };

  const hasApplied = currentUserData?.applications?.some(
    (app) => app.positionId === data?.id
  );

  return (
    <div className=''>
      <h1 className="text-3xl font-bold ">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold ">Descripción:</h3>
          <div>
            {isShortDescription ? data?.shortDescription : data?.longDescription}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold ">Categoría:</h3>
          <div>
            {data?.areaOfInterest?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold ">Empresa:</h3>
          <div>
            {data?.company?.name}
          </div>
        </div>
      </div>

      <Separator className='mt-3'/>

      <div className="mt-10 flex items-center gap-x-3">
        { currentUserData ? (
          hasApplied ? (
            <div>Tu aplicación está en revisión</div>
          ) : (
            <Button onClick={handleApplyClick} className="flex items-center gap-x-2">
              Aplicar
              <LogIn size={20} />
            </Button>
          )
        ) : (
          <div>
            Primero debes completar tu perfil<a href="/cv"><Button className='ml-3'>AQUÍ</Button></a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Info;