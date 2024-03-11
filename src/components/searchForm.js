import React, {useRef, useState} from "react";
import { ReactComponent as SearchBar }  from "../assets/bar_searchBtn.svg";


export const SearchForm = () =>{
  const [inputKey, setInputKey ] = useState();

  const inputRef = useRef(null)
  const handleOnSubmit = ()=>{
    setInputKey(inputRef.current.value);
  }

  return(
    <div className="search-wrap">
      <form onSubmit={()=>{handleOnSubmit()}} >
        <input 
          type="text"
          ref={inputRef}
          value={inputKey}
          onChange={(e)=>{setInputKey(e.target.value)}}
          placeholder="어느 곳에서 쉬고 싶으세요?"
          />
          <button
            className="search-btn"
            type="button"
            ><SearchBar />
            </button>
      </form>
    </div>

  )
}