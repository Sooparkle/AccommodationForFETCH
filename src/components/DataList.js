
import React from 'react';
import useFetchAccommodations from './UseFecthAccommodations';
import { Link, useNavigate } from "react-router-dom";
export const DataList =()=>{
  const { accomList, loading, error } = useFetchAccommodations();


  return (
  <>
    <h2>숙박 목록</h2>
    <div>
      {loading && <p>Loading accomodations..</p>}
      {error && <p>Error :{error}</p>}
      {
        accomList && (
          <ul className="data-list-area">
          { accomList.map((item)=>(
            <li className="data-list-each" key={item.id} >
              <div className="data-img-wrap">
                <img className="data-list-img" src={item.img_url} alt={item.accom_name} />
              </div>
              <div className="data-list-detail">
                <p><span>{item.province}</span><span>{item.cityGu}</span></p>
                <p>{item.description}</p>
                <p>{item.price} 원 / 박</p>
              </div>
              <Link 
                to={
                  {pathname : `/accomslist/${item.id}`,
                  state : {item}
                  }
                }
              >
              <button 
                className="data-list-button"
              > 
                상세보기
              </button>
              </Link>
            </li>
            )
          )}
        </ul>
        )
      }
      { !loading && !accomList && <p>No accommodations found...</p> }
    </div>
  </>
  )
}