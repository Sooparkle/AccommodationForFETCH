import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { ReactComponent as RightBtn } from "../assets/righgBtn.svg";
import { useNavigate } from "react-router-dom";

export const MyprofileList =()=>{
const dispatch = useDispatch();
const userInfor =  useSelector(state => state.auth)
const userName = useSelector(state => state.auth.user_name);

const navigate = useNavigate()

console.log("test", userInfor)


const handleCouponsCount = () => {
  window.alert(`${userName}께서는 현재 ${userInfor.coupons.length} 쿠폰을 가지고 있습니다.`)
}
  return(
    <>
      <div className="mypage-header">
        <p>My page</p>
      </div>

      <div className="mypage-user">
        <div className="mypage-user-wrap">
          <img src={userInfor?.image} alt="user-image" />
          <span>{userInfor?.user_name} 님</span>
          <div className="mypage-user-else">
            <div
              
            >
              <p>예약중인 숙소</p>
              <p>{userInfor?.bookings.length}</p>
            </div>
            <div>
              <p>찜한 숙소</p>
              <p>5</p>
            </div>
          </div>

        </div>

      <div className="mypage-user-benefit">
        <ul>
          <button
          aria-label="주문내역 확인 페이지"
            className="mypage-user-order"
            onClick={()=>navigate(`/orders`, { state: userInfor })}
          >주문내역
          </button>
          <button
            aria-label="쿠폰 확인 페이지"
            className="mypage-user-coupon"
            onClick={()=>navigate(`/coupons`, {state : userInfor.coupons})}
          >쿠폰</button>
        </ul>
      </div>

      <hr />

      <ul className="mypage-setting-wrap">
        <li
          tabIndex={0}
          role="button"
          onClick={()=>navigate(`/notice`)}
        >
          <p>공지사항</p>
          <RightBtn 
            
          />
        </li>


        <li
          tabIndex={0}
          role="button"
          onClick={()=>navigate(`/setting`)}
        >
          <p>환경설정</p>
          <RightBtn />
        </li>

        <li
          tabIndex={0}
          role="button"
          onClick={()=>navigate(`/contract`)}
        >
          <p>개인 약관 이용 및 정책</p>
          <RightBtn />
        </li>

        <li
        >
          <p>고객센터 ☎️
            
          </p>
          <span>12345-12345</span>
        </li>
        <p>현재 버전 1.0.10</p>
        <button 
        type="button"
        className="mypage-logout-btn"
        onClick={()=>{dispatch(logout())}}
      >
        log Out
        </button>
      </ul>

      </div>
    </>
  )

}