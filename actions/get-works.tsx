import { Work } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/works`;

interface Query {
  categoryId?: string;
  modalityId?: string;
  technologyId?: string;
  isFeatured?: boolean;
}

const getWorks = async (query: Query): Promise<Work[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      modalityId: query.modalityId,
      technologyId: query.technologyId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getWorks;
