import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { ReactComponent as RightBtn } from "../assets/righgBtn.svg";

export const MyprofileList =()=>{
const dispatch = useDispatch();
const userInfor =  useSelector(state => state.auth)
const userName = useSelector(state => state.auth.user_name);



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
            <div>
              <p>예약중인 숙소</p>
              <p>{userInfor?.bookings.length}</p>
            </div>
            <div>
              <p>찜한 숙소</p>
              <p>5</p>
            </div>
          </div>
            <p>(프로필 이미지, 이름, 예약중인 숙소를 제외 나머지 가 데이터)</p>
        </div>

      <div className="mypage-user-benefit">
        <ul>
          <li>알림</li>
          <li>주문내역</li>
          <li>쿠폰</li>
        </ul>
      </div>

      <hr />

      <div className="mypage-setting-wrap">
        <div>
          <p>공지사항</p>
          <RightBtn />
        </div>

        <div>
          <p>고객센터</p>
          <RightBtn />
        </div>

        <div>
          <p>환경설정</p>
          <RightBtn />
        </div>

        <div>
          <p>약관 및 정책</p>
          <RightBtn />
        </div>

        <p>현재 버전 1.0.10</p>
        <button 
        type="button"
        className="mypage-logout-btn"
        onClick={()=>{dispatch(logout())}}
      >
        log Out
      </button>
      </div>
 
      </div>
    </>
  )

}