"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/types';
import { useUser } from '@clerk/clerk-react'; 
import CVUploadComponent from '@/components/CVUploadComponent';
import getUsers from '@/actions/get-users';

const CVPage: React.FC = async () => {
  const [existingCV, setExistingCV] = useState<string | null>(null);
  const { user } = useUser();
  const clerkUserId = user?.id;

  console.log(clerkUserId)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersFromDB: User[] = await getUsers();
        const currentUserData = usersFromDB.find(u => u.clerkId === clerkUserId);

        if (currentUserData && currentUserData.cvUrl) {
          setExistingCV(currentUserData.cvUrl);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [clerkUserId]);

  const handleCVUpload = async (cvUrl: string) => {
    const organizationId = "your_organization_id"; // You'd need a way to get this
  
    if (existingCV) {
      // Update existing user CV URL using PATCH
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/${organizationId}/users/${clerkUserId}`, { cvUrl });
    } else {
      // Create new user record with clerkId, CV URL, name, and email
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, { 
        clerkId: clerkUserId, 
        cvUrl, 
        name: user?.fullName, 
        email: user?.primaryEmailAddress?.emailAddress,
      });
    }
    
    setExistingCV(cvUrl);
  };
  

  return (
    <div>
      {existingCV ? (
        <div>
          <a href={existingCV} target="_blank" rel="noopener noreferrer">View your CV</a>
          <CVUploadComponent onChange={handleCVUpload} value={[existingCV]} onRemove={(url) => setExistingCV(null)} />
        </div>
      ) : (
        <CVUploadComponent onChange={handleCVUpload} value={[]} onRemove={(url) => setExistingCV(null)} />
      )}
    </div>
  );
}

export default CVPage;
