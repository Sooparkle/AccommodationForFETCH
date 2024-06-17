import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { ReactComponent as Score } from "../assets/score.svg";
import { useSelector } from "react-redux";

export const DataList = ({ fetchingDateList }) => {
  // const { accomList, loading, error } = useFetchAccommodations();
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const navigate = useNavigate();
  const searchResultDataSlice = useSelector(state => state?.result.data)
  const refinedData = data?.data;

  useEffect(()=>{
    setData(searchResultDataSlice);

  },[searchResultDataSlice])
  

  const handleOnDetail = (accommodation) => {
    navigate(`/accomslist/${accommodation.id}`, { state: { accommodation } });
  };

  // useEffect(() => {
  //   const initialCall = async () => {
  //     try{
  //       const response = await fetch(
  //         // `https://port-0-pj3-server-dc9c2nlt7zv05q.sel5.cloudtype.app/accommodation`
  //         `http://localhost:4000/accommodation`
  //       );
  //       if (!response.ok){
  //         throw ("The Server has got an issue", response.status)
  //       }
  //       const data = await response.json();
  //       setInitialData(data);

  //     }
  //     catch(error){
  //       console.error("There are some issues", error);
  //     }


  //   };

  //   initialCall();

  // }, []);

  

  // const initialDataList = data?.length > 0 ? (
  //   data.map((item) => (
  //     <li className="data-list-each" key={item.id}>
  //       <img
  //         className="data-list-img"
  //         src={item.img_url}
  //         alt={item.accom_name}
  //       />
  //       <div className="data-list-detail">
  //         <div>{item.accom_name}</div>
  //         <p>
  //           <span>{item.province} </span>
  //           <span> ({item.cityGu})</span>
  //         </p>
  //         <p className="data-list-description">{item.description}</p>
  //         <div className="data-list-score">
  //           <Score className="data-score-svg" /> {item.score}
  //         </div>
  //         <p>{item.price} 원 / 박</p>
  //       </div>
  //       <button
  //         className="data-list-button"
  //         onClick={() => handleOnDetail(item)}
  //       >
  //         상세보기
  //       </button>
  //     </li>
  //   ))
  // ) : (
  //   <p> 검색 결과 값이 없습니다. 다른 검색어로 검색해 보세요! </p>
  // );


  
  // const searchResultListed = 
  
  //   refinedData?.map((item) => {
  //     return(
  //       <li className="data-list-each" key={item.id}>
  //         <img
  //           className="data-list-img"
  //           key={item.id}
  //           src={item.img_url}
  //           alt={item.accom_name}
  //         />
  //         <div className="data-list-detail">
  //           <p>
  //             <span>{item.province} </span>
  //             <span> ({item.cityGu})</span>
  //           </p>
  //           <p className="data-list-description">{item.description}</p>
  //           <div className="data-list-score">
  //             <Score className="data-score-svg" /> {item.score}
  //           </div>
  //           <p>{item.price} 원 / 박</p>
  //         </div>
  //         <button
  //           className="data-list-button"
  //           onClick={() => handleOnDetail(item)}
  //         >
  //           상세보기
  //           </button>
  //         </li>
  //     )}
  //   )

  return (
    <>
      <div>
      전체 개수 : {fetchingDateList.length}
      </div>
      <section>

        <ul className="data-list-area result">
          {/* {Object.entries(data)?.length > 0  ? searchResultListed :initialDataList } */}

          {
          fetchingDateList?.map((item) => {
        return(
          <li className="data-list-each" key={item.id}>
            <img
              className="data-list-img"
              key={item.id}
              src={item.img_url}
              alt={item.accom_name}
            />
            <div className="data-list-detail">
              <p>
                <span>{item.province} </span>
                <span> ({item.cityGu})</span>
              </p>
              <p className="data-list-description">{item.description}</p>
              <div className="data-list-score">
                <Score className="data-score-svg" /> {item.score}
              </div>
              <p>{item.price} 원 / 박</p>
            </div>
            <button
              className="data-list-button"
              onClick={() => handleOnDetail(item)}
            >
              상세보기
              </button>
            </li>
        )}
      )
    }

        </ul>

      </section>
    </>
  );
};
