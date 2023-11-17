import React, { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';
import { CldUploadWidget } from 'next-cloudinary';
import getPosition from '@/actions/get-position';
import getAreasOfInterest from '@/actions/get-areasOfInterest';
import toast from 'react-hot-toast';

import Spinner from '@/components/ui/spinner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import ApplicationItem from '@/components/applicationItem';

interface UploadResult {
  info?: {
    url?: string;
  };
}

interface UserUpdateFormProps {
  user: any;
}

interface AreaOfInterest {
  id: string | number; // adjust the type based on your actual data structure
  name: string;
  // add any other fields that you have
}

const UserUpdateForm: React.FC<UserUpdateFormProps> = ({ user }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '');
  const [linkedinUrl, setLinkedinUrl] = useState(user.linkedinUrl || '');
  const [cvUrl, setCvUrl] = useState(user.cvUrl || '');
  const [isCVUploaded, setIsCVUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [areasOfInterest, setAreasOfInterest] = useState<AreaOfInterest[]>([]);
  const [selectedArea, setSelectedArea] = useState(user.areaOfInterestId || '');

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/users/${user.id}`;

  useEffect(() => {
    const fetchAreasOfInterest = async () => {
      const areas = await getAreasOfInterest();
      setAreasOfInterest(areas);
    };
    fetchAreasOfInterest();
  }, []);

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
        areaOfInterestId: selectedArea // added this line
      });

      toast.success('User updated successfully!');
    } catch (error) {
      toast.error('Error updating user.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white relative py-10">
      <div className="absolute top-[60px] sm:top-[-1%] md:top-[-2%] lg:top-[-10%] xl:top-[-20%] left-0 right-0 z-[0]">
        <img src="/images/positionsVector.png" className="w-full" />
      </div>
      <Container >
        <div className="relative flex flex-col justify-center mb-5">
          <h1 className="text-4xl font-extrabold my-10 text-customBlue text-center">Actualizar Perfil</h1>
          <div className="w-full mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
              <div className="relative flex flex-col items-center justify-center md:mt-0">
                <label htmlFor="name" className="text-left w-full text-customBlue">Nombre</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-customBlue rounded-3xl px-4 py-2 bg-transparent text-customBlue"
                  required
                />
              </div>
              <div className="relative flex flex-col items-center justify-center md:mt-0">
                <label htmlFor="email" className="text-left w-full text-customBlue">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-customBlue rounded-3xl px-4 py-2 bg-transparent text-customBlue"
                  required
                />
              </div>
              <div className="relative flex flex-col items-center justify-center md:mt-0">
                <label htmlFor="phoneNumber" className="text-left w-full text-customBlue">Teléfono</label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full border-customBlue rounded-3xl px-4 py-2 bg-transparent text-customBlue"
                  required
                />
              </div>
              <div className="relative flex flex-col items-center justify-center md:mt-0">
                <label htmlFor="linkedinUrl" className="text-left w-full text-customBlue">LinkedIn (opcional)</label>
                <Input
                  id="linkedinUrl"
                  type="url"
                  placeholder="LinkedIn"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  className="w-full border-customBlue rounded-3xl px-4 py-2 bg-transparent text-customBlue"
                />
              </div>
              <div className="md:col-span-2 md:flex md:items-end md:justify-between">
                <div className="md:w-[65%]">
                  <label htmlFor="areaOfInterest" className="text-left w-full text-customBlue">Área de Interés</label>
                  <select
                    id="areaOfInterest"
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full border border-customBlue rounded-3xl px-4 py-2 bg-transparent text-customBlue focus:outline-none focus:border-customFocusColor z-10"
                  >
                    <option value="" disabled>Selecciona el área de tu interés</option>
                    {areasOfInterest.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 md:w-2/3 md:justify-end mt-5">
                  {/*// @ts-ignore */}
                  <CldUploadWidget uploadPreset="d2obllus" onUpload={onUpload}>
                    {({ open }) => (
                      <Button
                        type="button"
                        onClick={(e) => open()}
                        className="px-4 py-2 mb-4 md:mb-0 text-customOrange border-customOrange border-[2px] bg-white rounded-3xl hover:bg-customOrange hover:text-white w-full md:w-auto"
                      >
                        ACTUALIZAR CV
                      </Button>
                    )}
                  </CldUploadWidget>
                  {isCVUploaded && <p className="text-green-600 md:self-end mb-4 md:mb-0">CV Subido Correctamente!</p>}
                  <Button
                    type="submit"
                    className="px-4 py-2 text-white bg-customOrange rounded-3xl hover:bg-customBlue focus:outline-none focus:bg-customBlue-dark border-none w-full md:w-auto"
                  >
                    {isLoading ? <Spinner /> : 'ACTUALIZAR PERFIL'}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="relative flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold my-10 text-customBlue text-center">Empleos Aplicados</h1>
          <div className="w-full mx-auto">
            {user.applications.length > 0 ? (
              user.applications.map((application: any) => (
                <ApplicationItem key={application.id} application={application} />
              ))
            ) : (
              <p className="text-customBlue text-center py-10">
                Aún no has aplicado a ningún puesto
              </p>
            )}
          </div>
        </div>

      </Container>
    </div>
  );
};


export default UserUpdateForm;
