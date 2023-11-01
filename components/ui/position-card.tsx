"use client";

import { useRouter } from "next/navigation";
import { Position } from "@/types";

interface PositionCard {
  data: Position
}

const PositionCard: React.FC<PositionCard> = ({
  data
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/positions/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer bg-[#E8E8E8] hover:bg-customOrange rounded-xl p-4 space-y-4 w-full overflow-hidden flex flex-col transition-all duration-300"
    >
      <div>
        <p className="font-semibold text-lg uppercase text-customOrange group-hover:text-white pb-3 ">{data.name}</p>
      </div>
      <div>
        <p className="font-semibold text-customOrange group-hover:text-white pb-2">{data.company.name}  |   {data.location.name}   |   {data.modality.name}   |   {data.availability.name}</p>
      </div>
      <div>
        <p className="font-semibold text-customBlue">{data.shortDescription}</p>
      </div>
    </div>
  );
}

export default PositionCard; 
