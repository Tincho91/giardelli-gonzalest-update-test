"use client";

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { CldUploadWidget } from 'next-cloudinary';
import { Upload } from 'lucide-react';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/Spinner';

interface UploadResult {
  info?: {
    url?: string;
  };
}

interface UserUploadFormProps {
  initialUserData: string;
}

const UserUploadForm: React.FC<UserUploadFormProps> = ({ initialUserData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [cvUrl, setCvUrl] = useState('');
  const [isCVUploaded, setIsCVUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onUpload = (result: UploadResult) => {
    if (result.info && result.info.url) {
      setCvUrl(result.info.url);
      setIsCVUploaded(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isCVUploaded) {
      toast.error('Please upload your CV before submitting.');
      setIsLoading(false);
      return;
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/users`;

    try {
      const response = await axios.post(apiUrl, {
        name,
        email,
        phoneNumber,
        clerkId: initialUserData,
        linkedinUrl,
        cvUrl,
      });
      toast.success('User created successfully!');
      console.log('User created:', response.data);
      location.reload();
    } catch (error) {
      toast.error('Error creating user.');
      console.log('Error creating user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      <input type="url" placeholder="LinkedIn URL (optional)" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} />

      <CldUploadWidget onUpload={onUpload} uploadPreset="d2obllus">
        {({ open }) => (
          <Button type="button" onClick={(e) => open()}>
            <Upload className="h-4 w-4 mr-2" />
            Upload your CV
          </Button>
        )}
      </CldUploadWidget>

      {isCVUploaded && <p>CV uploaded successfully!</p>}

      <Button type="submit">
        {isLoading ? <Spinner /> : 'Submit'}
      </Button>
    </form>
  );
};

export default UserUploadForm;
