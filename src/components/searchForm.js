import React, {useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg"
import { FaBuilding } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";
import { SiGooglehome } from "react-icons/si";
import { useDispatch } from "react-redux";


export const SearchForm = ({ searchResults ,setSearchResults,onSearch }) => {
  const [ toggle, setToggle ] = useState(true)
  const dispatch = useDispatch();


  // const handleSearchSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       `https://port-0-pj3-server-dc9c2nlt7zv05q.sel5.cloudtype.app/search?keyword=${inputKey}`
  //       // `http://localhost:4000/search?keyword=${inputKey}`
  //     )
  //     const data = await response.json();
  //     onSearch(inputKeyValue.current.value);
  //     dispatch(searchDataSucceess(data))

  //   } catch (error) {
  //     console.error("Search failed", error);
  //   }
  //   finally{
  //     setInputKey("")
  //   }
  // };

  const handleToggleBtn = async (e) => {
    
    try{
      const key = e.target.innerText;
      const response = await fetch(
      `http://localhost:4000/search?keyword=${key}`);

      const data = await response.json();
      // onSearch(data)

    }
    catch (error){
      console.error("Search failed", error)
    }
  };

  const handleResetBtn = () =>{}

  return (

    <>
      <section className="search-input-wrap">
        <form 
        // onSubmit={(e) => handleSearchSubmit(e)}
        >
          <div>
              <Link 
                onClick={()=>setSearchResults("")}
                to="/" >
                <Logo />
              </Link>
              <div 
                className="search-input-text"
              >
                <input
                  type="text"
                  value={searchResults}
                  onChange={(e) => {
                    setSearchResults(e.target.value);
                  }}
                  placeholder="어디로 떠날까요?"
                />

              </div>
            {/* <button type="submit">조회</button> */}


          </div>
        </form>
      {/* <div 
        className="search-input-classify"
      >
        <button onClick={(e) => handleToggleBtn(e)}><FaHotel /> 호텔</button>
        <button onClick={(e) => handleToggleBtn(e)}><FaBuilding /> 모텔</button>
        <button onClick={(e) => handleToggleBtn(e)}><HiHome style={{width:24}} /> 전통</button>
        <button onClick={(e) => handleToggleBtn(e)}><SiGooglehome /> 프라이빗</button>
      </div> */}
      </section>
    </>
  );
};
