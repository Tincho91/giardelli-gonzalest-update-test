import { auth } from '@clerk/nextjs';

// Clerk function to check user logged-in status
export const isUserLoggedIn = (): boolean => {
  const { userId } = auth();

  return Boolean(userId);
};

// Function to check if user has uploaded a CV
export const hasUploadedCV = async (userId: string): Promise<boolean> => {
  // Communicate with your backend to fetch the CV or CV status
  const response = await fetch(`/api/cvs/${userId}`); // This is just an example endpoint
  const data = await response.json();

  // Assuming the API returns null if no CV is found
  return data.cv !== null;
};
