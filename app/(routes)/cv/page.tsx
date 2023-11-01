"use client";

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { User } from '@/types';
import { AreaOfInterest } from '@/types';
import { useUser } from '@clerk/clerk-react';
import Spinner from '@/components/ui/spinner';
import getUsers from '@/actions/get-users';
import getAreasOfInterest from '@/actions/get-areasOfInterest';
import UserUpdateForm from '@/components/userUpdateForm';
import UserUploadForm from '@/components/userUploadForm';

const CVPage: React.FC = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [currentUserData, setCurrentUserData] = useState<User | null>(null);
  const [areasOfInterest, setAreasOfInterest] = useState<AreaOfInterest[]>([]);
  
  useEffect(() => {
    if (!user) {
      redirect('/sign-in');
      return;
    }
    
    const fetchData = async () => {
      const [usersFromDB, fetchedAreasOfInterest] = await Promise.all([
        getUsers(),
        getAreasOfInterest(),
      ]);
      
      const foundUser = usersFromDB.find(u => u.clerkId === user?.id);
      setCurrentUserData(foundUser ?? null);
      setAreasOfInterest(fetchedAreasOfInterest);
      setLoading(false); 
    };

    fetchData();
  }, [user]);
  
  if (loading) {
    return <div className='h-full flex justify-center items-center'> <Spinner /> </div>;
  }
  
  return currentUserData
    ? <UserUpdateForm user={currentUserData} />
    : <UserUploadForm initialUserData={user?.id ?? ""} areasOfInterest={areasOfInterest} />;
};

export default CVPage;
