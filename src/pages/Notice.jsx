import { useNavigate } from "react-router-dom"
import { Footer } from "../components/Footer";
import { useScrollTop } from "../components/UseScrollTop";

export const Notice = () =>{
const navigate = useNavigate();
  useScrollTop();

  return(
    <>
    <main className="main">
      <article className="content-wrap">
        <section className="content-header">
          <h2>
            공지사항
          </h2>
          </section>
          
          <section
            className="content-body"
          >
            <section className="notice-table-header">
              <div>번호</div>
              <div>제목</div>
            </section>
            <ul className="notice-table">
              <li>
                <div className="notice-order">3</div>
                <div className="notice-title">점검 안내, 2024년 6월 홈페이지 점검 안내</div>
              </li>
              <li>
                <div className="notice-order">2</div>
                <div className="notice-title" >좀쉼쉼 홈페이지 오픈 이벤트를 진행하오니 많은 참여 하겠습니다.</div>
              </li>
              <li>
                <div className="notice-order">1</div>
                <div className="notice-title">2024.03월 홈페이지가 오픈하였습니다.</div>
              </li>
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