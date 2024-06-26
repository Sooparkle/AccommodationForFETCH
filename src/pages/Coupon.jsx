import { useLocation, useNavigate } from "react-router-dom";
import { useScrollTop } from "../components/UseScrollTop"

export const Coupon = () =>{
  useScrollTop();
  const navigate = useNavigate();
  const {state} = useLocation();

  console.log("test", state)

  return(
    <>
    <main className="main"

    
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
                      placeItems:"center",
                      placeContent:"center",
                      width:"100%",
                      height:"100%"
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