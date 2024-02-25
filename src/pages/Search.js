import React from 'react';
import { SearchForm } from "../components/searchForm"

export const Search =()=>{

  // const [province, setProvince ] = useSelector()

  return(
    <>
      <h2>검색 페이지</h2>
      <SearchForm />
      <div className='content-wrap'>
        <div className='province'>
          <ul>

          </ul>
        </div>
      </div>
    </>
  )
}