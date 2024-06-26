import { useLocation, useNavigate } from "react-router-dom";
import { useScrollTop } from "../components/UseScrollTop"

export const Orders = () =>{
  useScrollTop();
  const navigate = useNavigate();
  const {state} = useLocation();

  return(
    <>
    <main className="main"
    style={{height:"100%"}}
    
    >
      <article className="content-wrap"
        style={{maxHeight:"none"}}
      >
        <section className="content-header">
          <h2>
            주문내역
          </h2>
          </section>
          
          <section
            className="content-body"
          >

            <section 
              style={{
                display:"grid",
                gridTemplateColumns:"1fr 2fr 1fr",
                borderBottom:"2px solid #ccc",
                padding:"1rem 0",
                fontSize:"18px",
                fontFamily:"600",
                placeItems:"center"

              }}
            >
              <div
              
              >숙소명</div>
              <div>기간</div>
              <div>예약상태</div>
            </section>

          <ul>
            {
              state?.bookings.map((i,index) => {
                return(
                  <li
                    style={{
                      listStyle:"none",
                      padding:"1rem 0",
                      borderBottom:"1px solid #ccc",
                      display : "flex",
                      placeItems:"center",
                      placeContent:"center"
                    }}
                    key={i.id}
                  >
                    <div
                      style={{flex: 1}}
                    >{index+1}. {i.accom_name}</div>
                    <div
                      style={{flex: 2, textAlign:"center"}}
                    >
                      {i.start_date} ~ {i.end_date}
                    </div>
                    <div
                      style={{flex: 1, textAlign:"center"}}
                    >{i.order_status ? "예약완료" : "예약대기"}</div>
                  </li>
                )
              }
              )
            }

            </ul>
            <p
              style={{
                display:"flex",
                placeContent:"center",
                placeItems:"center",
                padding:"2rem 0"
              }}
            >전체 주문 : {state?.bookings.length}</p>
          </section>

            <button
            className="content-back-btn"
              onClick={()=>navigate('/mypage')}
            >뒤로</button>

      </article>
    </main>
    </>
  )
}