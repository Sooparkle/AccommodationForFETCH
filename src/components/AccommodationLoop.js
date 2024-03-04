import  React from "react";
import useFetchAccommodations from "./UseFetchingAccommodations";

export const AccommodationLoop = () => {
  const { accomList, loading, error } = useFetchAccommodations();

  console.log("작동 합니까? AccommodationLoop",accomList )
  return (
    <div> 

      {
        accomList.map((item)=>{
          <div className="data-list-wrap" >
            <img className="data-list-img" src={item.img_url} alt={item.accom_name} />
            <div className="data-list-detail">
              <p><span>{item.province}</span><span>{item.cityGu}</span></p>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          </div>

        })
      }
    </div>

  )
  
}
