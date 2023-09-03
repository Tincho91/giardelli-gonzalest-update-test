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

  console.log(data)

  const handleClick = () => {
    router.push(`/positions/${data.id}`);
  };
  
  return ( 
    <div onClick={handleClick} className="group cursor-pointer rounded-xl border p-3 space-y-4">
      <div>
        <p className="font-semibold text-lg pb-3">{data.name}</p>
        <p className="text-sm pb-2">-{data.areaOfInterest.name}</p>
        <p className="text-sm">-{data.shortDescription}</p>
      </div>
    </div>
  );
}

export default PositionCard;
