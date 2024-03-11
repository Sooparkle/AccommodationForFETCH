import useFetchAccommodations from "./UseFetchingAccommodations";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Score } from "../assets/score.svg"

export const DataList = () => {
  const { accomList, loading, error } = useFetchAccommodations();
  const navigate = useNavigate();

  const handleOnDetail =(accommodation) =>{
    navigate(`/accomslist/${accommodation.id}`, { state: { accommodation } })
  }

  return (
    <div className="data-area">
      { loading && <p>Loading accommodations...</p>}
      { error &&  <p>error : {error}</p> }
      { 
        accomList && (
          <ul className="data-list-area">
          { accomList.map((item)=>(
            <li className="data-list-each" key={item.id} >
              <div className="data-img-wrap">
                <img className="data-list-img" src={item.img_url} alt={item.accom_name} />
              </div>
              <div className="data-list-detail">
                <p className="data-list-location"><span>{item.province}</span><span>{item.cityGu}</span></p>
                <p>{item.description}</p>
                <p className="data-list-price">{item.price} 원 / 박</p>
                <div className="data-list-score"><Score className="data-score-svg" /> 5</div>
              </div>

              <button 
                className="data-list-button"
                onClick={() => handleOnDetail(item)}
              > 
                상세보기
              </button>
            </li>
            )
          )}
        </ul>
        )
      }

    </div>
  );
};
