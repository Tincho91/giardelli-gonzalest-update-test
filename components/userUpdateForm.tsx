"use client";

import React, { useEffect, useState } from 'react';
import { Clipboard } from 'lucide-react';
import getPosition from '@/actions/get-position';
import { User, Position } from "@/types";
import Spinner from '@/components/ui/Spinner';

interface UserUpdateFormProps {
  user: User;
}

const UserUpdateForm: React.FC<UserUpdateFormProps> = ({ user }) => {
  const [positions, setPositions] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchPositions = async () => {
      setLoading(true); // Set loading to true when fetching starts

      if (user.applications) {
        const positionPromises = user.applications.map(async (app) => {
          const position: Position = await getPosition(app.positionId);
          return { id: app.positionId, name: position.name };
        });

        const fetchedPositions = await Promise.all(positionPromises);

        const positionMap: Record<string, string> = {};

        fetchedPositions.forEach((pos) => {
          positionMap[pos.id] = pos.name;
        });

        setPositions(positionMap);
      }

      setLoading(false);
    };

    fetchPositions();
  }, [user.applications]);

  return (
    <div>
      <h1>Hola!, {user.name}</h1>
      <div>
        Your email: {user.email}
      </div>
      <div className='flex'>
        CV: <a href={user.cvUrl} target="_blank" rel="noopener noreferrer"><Clipboard /></a>
      </div>
      <div>
        Trabajos a los que aplicaste:
        {loading ? (
          <Spinner />  // Show Spinner if loading
        ) : (
          <ul>
            {user.applications?.map((app) => (
              <li key={app.id}>
                - {positions[app.positionId] || 'Loading...'} - Status: {app.status}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserUpdateForm;