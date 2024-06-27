import { useLocation, useNavigate } from "react-router-dom";
import { useScrollTop } from "../components/UseScrollTop"
import React, { useEffect, useState } from "react";

export const Orders = () =>{
  useScrollTop();
  const navigate = useNavigate();
  const {state} = useLocation();


  // const [sortedBookings, setSortedBookings] = useState([]);

  // useEffect(() => {
  //   if (state?.bookings) {
  //     const today = new Date();
  //     const sorted = [...state.bookings].sort((a, b) => {
  //       const dateA = new Date(a.start_date);
  //       const dateB = new Date(b.start_date);
  //       return Math.abs(dateB - today) - Math.abs(dateA - today);
  //     });
  //     setSortedBookings(sorted);
  //   }
  // }, [state]);


  const today = new Date();

  const sorted = state?.bookings.toSorted((a,b)=> {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return Math.abs(dateA - today) - Math.abs(dateB - today);
  });
  

  return(
    <>
    <main className="main"
    
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
              sorted.map((i,index) => {
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
                    >{sorted.length - index}. {i.accom_name}</div>
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