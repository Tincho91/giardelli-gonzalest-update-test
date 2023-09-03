"use client";

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { User } from '@/types';
import { useUser } from '@clerk/clerk-react';
import Spinner from '@/components/ui/Spinner';
import getUsers from '@/actions/get-users';
import UserUpdateForm from '@/components/userUpdateForm';
import UserUploadForm from '@/components/userUploadForm';

const CVPage: React.FC = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [currentUserData, setCurrentUserData] = useState<User | null>(null);
  
  useEffect(() => {
    if (!user) {
      redirect('/sign-in');
      return;
    }
    
    const fetchData = async () => {
      const usersFromDB: User[] = await getUsers();
      const foundUser = usersFromDB.find(u => u.clerkId === user?.id);
      setCurrentUserData(foundUser ?? null);
      setLoading(false);
    };

    fetchData();
  }, [user]);
  
  if (loading) {
    return <Spinner />;
  }
  
  return currentUserData ? <UserUpdateForm user={currentUserData} /> : <UserUploadForm initialUserData={user?.id ?? ""} />;
};

export default CVPage;
