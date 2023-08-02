"use client";

import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import { Work } from "@/types";

interface InfoProps {
  data: Work
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/work/${data?.id}`);
  };

  return ( 
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Categoría:</h3>
          <div>
            {data?.category?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Empresa:</h3>
          <div>
            {data?.company?.name}
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={handleClick} className="flex items-center gap-x-2">
          Postularse
          <LogIn size={20} />
        </Button>
      </div>
    </div>
  );
}
 
export default Info;
