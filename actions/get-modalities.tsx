import { Modality } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/modalities`;

const getModalities = async (): Promise<Modality[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getModalities;
