import React, { useEffect } from "react";
import { AccommodationLoop } from "./AccommodationLoop";
import useFetchAccommodations from "./UseFetchingAccommodations";

export const DataList = () => {
  const { accomList, loading, error } = useFetchAccommodations();

  useEffect(()=>{}, [loading])
  return (
    <div className="data-area">
        <AccommodationLoop />
    </div>
  );
};
