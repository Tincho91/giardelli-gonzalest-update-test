import { AreaOfInterest } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/areasOfInterest`;

const getAreasOfInterest = async (): Promise<AreaOfInterest[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getAreasOfInterest;

