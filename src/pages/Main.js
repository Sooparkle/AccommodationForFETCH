import React, { useState } from 'react';
import { SearchForm } from "../components/SearchForm";
import { DataList } from "../components/DataList";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { SearchResults } from '../components/SearchResults';
import { Header } from '../components/Header';

export const Main = () =>{
  const [ searchResults, setSearchResults ] = useState([]);
  const navigate = useNavigate();


  const handleSearch = (newSearchResults) =>{
    setSearchResults(newSearchResults)
  }

  return (
    <div className='main'>

      <SearchForm 
        onSearch={handleSearch}
        onClick={()=>{navigate("/")}}/>

      {
        searchResults.length <= 0 && <DataList />
      }
      <Header />
    </div>
  )
}