"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import { Modality, AreaOfInterest } from "@/types";

interface FilterProps {
  data: (Modality | AreaOfInterest)[];
  name: string;
  valueKey: string;
};

const Filter: React.FC<FilterProps> = ({
  data,
  name,
  valueKey,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url);
  }

  return (
    <div>
      <div className="mr-4">
        <select
          id={valueKey}
          value={selectedValue || ""}
          onChange={(e) => onClick(e.target.value)}
          className="px-4 py-2 text-white bg-customBlue rounded-3xl hover:bg-customBlue-dark focus:outline-none border-none w-full md:w-auto"
        >
          <option value="" disabled>
            {name}
          </option>
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
