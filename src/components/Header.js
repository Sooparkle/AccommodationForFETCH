import { NavLink, useNavigation } from "react-router-dom";
import { ReactComponent as  Logo }  from "../assets/Logo.svg";
import { ReactComponent as Search }  from "../assets/search.svg";
import  { ReactComponent as MyProfile }  from "../assets/profile.svg";
import React, { useState } from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = useState(""); // Track the active link
  const navigate = useNavigation();

  
  const handleLinkClick = (link) => {
    setActiveLink(link);
    navigate(link)
  }
  return (
    <>
      <div className="header-wrap">
        <ul>

          <li className={activeLink === "/search" ? "active" : ""}>
            <NavLink to="/search" onClick={(e) => { handleLinkClick("/search"); e.preventDefault();} }>
              <Search
                fill={activeLink === "/search" ? "#007bff" : "#fff"} // Change color for active link
                stroke="#999"
                className="header-search"
              />
            </NavLink>
          </li>

          <li className={activeLink === "/" ? "active" : ""}>
            <NavLink to="/" onClick={ (e) => { handleLinkClick("/");  e.preventDefault();} }>
              <Logo
                fill={activeLink === "/" ? "#007bff" : "#fff"}
                stroke="#999"
              />
            </NavLink>
          </li>

          <li className={activeLink === "/mypage" ? "active" : ""}>
            <NavLink to="/mypage" onClick={(e) => {handleLinkClick("/mypage");  e.preventDefault();} }>
              <MyProfile
                fill={activeLink === "/mypage" ? "#007bff" : "#fff"}
                stroke="#999"
                className="header-myprofile"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
};
