import React, { useState } from 'react';
import { SearchForm } from "../components/SearchForm";
import { DataList } from "../components/DataList";
import { useNavigate } from "react-router-dom";
import { SearchResults } from '../components/SearchResults';

export const Main = () =>{
  const [ searchResults, setSearchResults ] = useState([]);
  const navigate = useNavigate();
  // DB에서 가져온 데이터 redux를 통해서 여기로 투하


  const handleSearch = (newSearchResults) =>{
    setSearchResults(newSearchResults)
  }

  return (
    <>

      <SearchForm 
        onSearch={handleSearch}
        onClick={()=>{navigate("/")}}/>
        <hr />
      {/* <button type="button" onClick={()=>{navigate("/search")}}>상세</button> */}
      <SearchResults accomList={searchResults} />
      {
        searchResults.length <= 0 && <DataList />
      }

    </>
  )
}