import React from 'react';
import { SearchForm } from "../components/SearchForm";

export const Search =()=>{

  // const [province, setProvince ] = useSelector()

  return(
    <>
      <h2>검색 페이지</h2>
      <SearchForm />
      <div className='content-wrap'>
        <div className='province'>
        </div>
      </div>
    </>
  )
}