import { NavLink } from "react-router-dom";
import  logo  from "../assets/Logo.svg";
import searchLogo  from "../assets/search.svg";
import  myProfile  from "../assets/profile.svg";

export const Header = () => {
  return (
    <>
      <div className="header-wrap">
        <ul>
          <li>
            <NavLink to="/search">
              <img src={searchLogo} alt="검색" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={logo} alt="홈" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/mypage">
              <img src={myProfile} alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
