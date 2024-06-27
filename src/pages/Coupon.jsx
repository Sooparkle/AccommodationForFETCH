import { useLocation, useNavigate } from "react-router-dom";
import { useScrollTop } from "../components/UseScrollTop"

export const Coupon = () =>{
  useScrollTop();
  const navigate = useNavigate();
  const {state} = useLocation();


  return(
    <>
    <main className="main"
      // style={{height:"100%"}}
    
    >
      <article className="content-wrap"
        style={{maxHeight:"none"}}
      >
        <section className="content-header">
          <h2>
            쿠폰
          </h2>
          </section>
          
          <section
            className="content-body"
          >

            <section 
              style={{
                display:"grid",
                borderBottom:"2px solid #ccc",
                padding:"1rem 0",
                fontSize:"18px",
                fontFamily:"600",

              }}
            >
              쿠폰 개수 : {state?.length}
            </section>

          <ul>
            {
              state?.map((i,index) => {
                return(
                  <li
                    style={{
                      listStyle:"none",
                      padding:"2rem 0",
                      borderBottom:"1px solid #ccc",
                      display : "flex",
                      placeItems:"end",
                      placeContent:"center",
                      width:"100%",
                      height:"100%",
                      gap:"2rem"
                    }}
                    key={index}
                  >
                    <div
                      style={{
                        maxWidth:"280px",
                        height: "150px",
                        width:"100%",
                        position:"relative",
                        borderRadius:".8rem",
                        boxShadow:"0 0 8px 5px rgba(0, 0, 0, .2)",
                        background:" linear-gradient(40deg, rgba(130,189,105,1) 0%, rgba(0,212,255,1) 100%)"
                      }}
                    >

                    <span
                      style={{
                        color:"#fff",
                        fontSize:".8rem",
                        position:"absolute",
                        bottom:"44px",
                        right:"1rem",
                      }}
                    
                    
                    >감사 이벤트(ID)</span>
                    
                    <span
                      style={{
                        color:"#fff",
                        fontSize:"3rem",
                        fontWeight:"900",
                        position:"absolute",
                        top:"50%",
                        left:"50%",
                        transform:"translate(-50%, -50%)"
                      }}
                    >25%
                    </span>
                    <span
                      style={{
                        fontSize:"1.1rem",
                        fontWeight:"900",
                        position:"absolute",
                        bottom:"20px",
                        right:"1rem"
                      }}
                    >{i}</span>
                    </div>
                    <div>
                      <div
                        style={{
                          background:"#f1f1f1",
                          padding:"1rem .5rem",
                          borderRadius:".4rem"

                        }}
                      >
                        좀쉼쉼 숙박 사이트를 자주 이용해주신 고객 한정 전달 제품</div>
                      <div
                      style={{
                        textAlign:"right",
                        fontWeight:"600",
                        marginTop:"20px"
                      }}
                      >
                      <span>2024.01.01</span> ~ <span>2024.12.31</span>

                      </div>
                    </div>
                  </li>
                )
              }
              )
            }

          </ul>
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