import React, {useRef, useState} from "react";

export const SearchForm = ({onSearch}) =>{
  const [inputKey, setInputKey ] = useState();
  
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
  
    try{
      const response = await fetch(`https://port-0-pj3-server-dc9c2nlt7zv05q.sel5.cloudtype.app/search?keyword=${inputKey}`);
      const data = await response.json();
      onSearch(data);
    } catch (error) {
      console.error('Search failed', error.message);
    }
  }

  return(
    <div className="search-input-wrap">
      <form onSubmit={(e)=>handleSearchSubmit(e)} >
          <input 
            type="text"
            value={inputKey}
            onChange={(e)=>{setInputKey(e.target.value)}}
            placeholder="어디로 떠날까요?"
            />
            <button
              type="submit"
              >조회</button>
      </form>
    </div>

  )
}