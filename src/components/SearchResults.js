import { useNavigate } from "react-router-dom"

export const SearchResults = ({accomList}) =>{
  const navigate = useNavigate()

  const handleOnDetail = (accommodation)=>{
    navigate(`/accomslist/${accommodation.id}`, {state:{accommodation}})
  }

  console.log("SearchResults",accomList )

  const searchKeyword = accomList?.data;

  return(
    <div>

    {
      accomList && (
        <ul className="data-list-area">
        { searchKeyword?.map((item)=>(
          <li className="data-list-each" key={item.id} >
            <div className="data-img-wrap">
              <img className="data-list-img" src={item.img_url} alt={item.accom_name} />
            </div>
            <div className="data-list-detail">
              <p><span>{item.province}</span><span>{item.cityGu}</span></p>
              <p>{item.description}</p>
              <p>{item.price} 원 / 박</p>
            </div>
            <button 
              className="data-list-button"
              onClick={()=>handleOnDetail(item)}
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
  )
}
