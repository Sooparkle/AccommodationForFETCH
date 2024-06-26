import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollTop } from "../components/UseScrollTop"

export const Setting = () =>{
  useScrollTop();
  const navigate = useNavigate();
  const [isClikced, toggleClicked ]= useState(false)
  const [isBanner, toggleBanner ]= useState(true)
  const [isEmail, toggleEmail ]= useState(true)
  const [isSMS, toggleSMS ]= useState(true)

  return(
    <main
      className="main"
    >
      <article
        className="content-wrap"
      >
        <section
          className="content-header"
        >
          <h2>환경설정</h2>
        </section>

        <article
            className="content-body"
          >
            <div
            className="setting-alert"
            >
              <p>
                {isClikced ? "알람 설정 끄기" : "알람 설정 켜기"}
                <p
                  style={{
                    color:"#aaa",
                    fontSize:"14px",
                    marginTop:"10px",
                  }}
                >마케팅 및 프로모션 활동에 활용 할 수 있도록 사용</p>
              </p>
              <label class="setting-toggle-switch">
              <input 
                type="checkbox"
                checked={isClikced}
                onChange={()=>toggleClicked(!isClikced)}
              />
              <span class="setting-slider"></span>
            </label>
            </div>

          { isClikced &&
            <ul
            className="setting-submenu"
    
            >
              <li>
                <p>
                  맞춤형 광고(배너)
                  <p
                    style={{
                      color:"#aaa",
                      fontSize:"14px",
                      marginTop:"10px",
                    }}
                  >맞춤형 배너 광고를 위한 행태정보</p>
                </p>
                <label class="setting-toggle-switch">
                  <input 
                    type="checkbox"
                    checked={isBanner}
                    onChange={()=>toggleBanner(!isBanner)}
                  />
                  <span class="setting-slider"></span>
                </label>
              </li>

              <li>
                <p>
                  이메일 수신 동의
                  <p
                    style={{
                      color:"#aaa",
                      fontSize:"14px",
                      marginTop:"10px",
                    }}
                  >이벤트 및 다양한 혜택정보 이메일 수신 허용</p>  
                </p>
                <label class="setting-toggle-switch">
                  <input 
                    type="checkbox"
                    checked={isEmail}
                    onChange={()=>toggleEmail(!isEmail)}
                  />
                  <span class="setting-slider"></span>
                </label>
              </li>

              <li>
                <p>
                  SMS 수신 동의
                  <p
                  style={{
                    color:"#aaa",
                    fontSize:"14px",
                    marginTop:"10px",
                  }}
                  
                  >이벤트 및 다양한 혜택정보 SMS 수신 허용</p>  
                </p>
                <label class="setting-toggle-switch">
                  <input 
                    type="checkbox"
                    checked={isSMS}
                    onChange={()=>toggleSMS(!isSMS)}
                  />
                  <span class="setting-slider"></span>
                </label>
              </li>
            </ul>


          }
          </article>

          <button
            className="content-back-btn"
              onClick={()=>navigate('/mypage')}
            >뒤로</button>

      </article>
    </main>
  )
}