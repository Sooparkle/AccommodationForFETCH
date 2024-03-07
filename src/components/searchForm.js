import React, {useRef, useState} from "react";

export const SearchForm = () =>{
  const [inputKey, setInputKey ] = useState();

  const inputRef = useRef(null)
  const handleOnSubmit = ()=>{
    setInputKey(inputRef.current.value);
  }

  return(
    <div>
      <form onSubmit={()=>{handleOnSubmit()}} >
          <input 
            type="text"
            ref={inputRef}
            value={inputKey}
            onChange={(e)=>{setInputKey(e.target.value)}}
            />
            <button
              type="button"
              >조회</button>
      </form>
    </div>

  )
}