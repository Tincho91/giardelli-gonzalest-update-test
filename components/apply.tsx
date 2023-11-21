"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LogIn } from "lucide-react";
import { toast } from 'react-hot-toast';
import Router from "next/router";
import { useRouter } from "next/navigation";
import { User } from '@/types';
import { useUser } from '@clerk/clerk-react';
import { Button } from "./ui/button";
import { Position } from "@/types";
import getUsers from "@/actions/get-users";


interface ApplyProps {
  data: Position;
  onClose?: () => void;
  isShortDescription?: boolean;
}

const Apply: React.FC<ApplyProps> = ({ data, onClose, isShortDescription }) => {
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
  }, [user, clerkUserId]);

  const handleApplyClick = async () => {
    try {
      if (currentUserData?.id) {
        const formData = {
          positionId: data?.id
        };
  
        const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/users/${currentUserData.id}`, formData);
  
        if (response.status === 200) {
          const emailData = {
            user: {
              name: currentUserData.name,
              cv: currentUserData.cvUrl,
              email: currentUserData.email,
            },
            application: {
              name: data.name, // Assuming data contains the job information
            },
          };

          await axios.post('/api/apGiardelli', emailData);

          toast.success("Successfully applied for the position.");
          Router.reload();
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
    <div className='flex align-middle'>
      <div className="flex items-center gap-x-3 align-middle">
        { currentUserData ? (
          hasApplied ? (
            <div><p className='text-customBlue text-bold'>Tu aplicación está en revisión</p></div>
          ) : (
            <Button onClick={handleApplyClick} className="px-4 py-2 text-white bg-customOrange rounded-3xl hover:bg-customBlue focus:outline-none border-none w-full md:w-auto">
              Aplicar
              <LogIn size={20} className='ml-2'/> 
            </Button>
          )
        ) : (
          <div>
            <p className='text-customBlue align-middle'>Primero debes completar tu perfil<a href="/cv"><Button className='ml-3 px-4 py-2 text-white bg-customOrange rounded-3xl hover:bg-customBlue focus:outline-none border-none w-full md:w-auto'>AQUÍ</Button></a></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Apply;