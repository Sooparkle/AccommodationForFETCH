export const AccommodationLoop = ({item}) =>{

  return(
    <>
      <img className="data-list-img" src="https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Fexhibition%2FitemContents%2Fa6b561c3bc867d43a03d849d558d09e0.jpg&w=1200&q=75" alt="숙박업소 이름" />
      <div className="dat-list-detail" >
        <p><span>{item.province}</span>, <span>{item.cityGu}</span></p>
        <p><span className="data-list-signature">{item.accom_name}</span></p>
        <p><span className="data-list-signature">{item.accom_type}</span></p>
        <p><span className="data-list-price">{item.price}</span>원</p>
        <span className="data-list-event" >{ item.event ? "특가중" : null }</span>
      </div>
    </>
  )
}