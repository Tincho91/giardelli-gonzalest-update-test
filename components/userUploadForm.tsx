"use client";

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { CldUploadWidget } from 'next-cloudinary';
import { Upload } from 'lucide-react';
import toast from 'react-hot-toast';

import { Input } from './ui/input';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';
import Container from './ui/container';

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
    <Container>
      <div className="relative flex flex-col justify-center my-5">
        <h1 className="text-center mb-4 border text-3xl md:text-4xl lg:text-5xl rounded-md p-5">Crear Perfil</h1>
        <p className="text-center mb-4 border text-sm md:text-lg lg:text-xl rounded-md p-5">
          &quot;Nuestra consultora se ocupa de realizar procesos de selección de personas para ocupar mandos medios y gerenciales dentro de la jerarquía de distintas entidades tales como, gestor organizacional, profesional en gestión, CEO, gerente, director y project manager, entre otros.
          <br />
          <br />
          Si tu trayectoria es acorde a dichos puestos, te invitamos a cargar tu CV.&quot;
        </p>

        <div className="w-full max-w-[1400px] border mx-auto rounded-md p-8">
          <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            <div className="relative flex flex-col items-center justify-center md:mt-0">
              <label htmlFor="name" className="text-left w-full">Nombre</label>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-md px-4 py-2"
                required
              />
            </div>
            <div className="relative flex flex-col items-center justify-center md:mt-0">
              <label htmlFor="email" className="text-left w-full">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md px-4 py-2"
                required
              />
            </div>
            <div className="relative flex flex-col items-center justify-center md:mt-0">
              <label htmlFor="phoneNumber" className="text-left w-full">Teléfono</label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border rounded-md px-4 py-2"
                required
              />
            </div>
            <div className="relative flex flex-col items-center justify-center md:mt-0">
              <label htmlFor="linkedinUrl" className="text-left w-full">LinkedIn (opcional)</label>
              <Input
                id="linkedinUrl"
                type="url"
                placeholder="LinkedIn"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className="w-full border rounded-md px-4 py-2"
              />
            </div>
            <div className="md:col-span-2">
              <CldUploadWidget uploadPreset="d2obllus" onUpload={onUpload}>
                {({ open }) => (
                  <Button
                    type="button"
                    onClick={(e) => open()}
                    className="w-full rounded-md px-4 py-2"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    SUBIR CV
                  </Button>
                )}
              </CldUploadWidget>
              {isCVUploaded && <p className="text-green-600">CV uploaded successfully!</p>}
            </div>
            <div className="md:col-span-2">
              <Button
                type="submit"
                className="w-full rounded-md px-4 py-2"
              >
                {isLoading ? <Spinner /> : 'CREAR PERFIL'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default UserUploadForm;