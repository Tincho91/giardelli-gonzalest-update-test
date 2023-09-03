import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { CldUploadWidget } from 'next-cloudinary';
import toast from 'react-hot-toast';
import Spinner from './ui/spinner';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Container from './ui/container';

interface UploadResult {
  info?: {
    url?: string;
  };
}

interface UserUpdateFormProps {
  user: any;
}

const UserUpdateForm: React.FC<UserUpdateFormProps> = ({ user }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '');
  const [linkedinUrl, setLinkedinUrl] = useState(user.linkedinUrl || '');
  const [cvUrl, setCvUrl] = useState(user.cvUrl || '');
  const [isCVUploaded, setIsCVUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/users/${user.id}`;

  const onUpload = (result: UploadResult) => {
    if (result.info && result.info.url) {
      setCvUrl(result.info.url);
      setIsCVUploaded(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.patch(apiUrl, {
        name,
        email,
        phoneNumber,
        linkedinUrl,
        cvUrl,
      });

      toast.success('User updated successfully!');
    } catch (error) {
      toast.error('Error updating user.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className="relative flex flex-col justify-center my-5">
        <h1 className="text-center mb-4 border text-3xl md:text-4xl lg:text-5xl rounded-md p-5">Actualizar Perfil</h1>
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
                    ACTUALIZAR CV
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
                {isLoading ? <Spinner /> : 'ACTUALIZAR PERFIL'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};


export default UserUpdateForm;
