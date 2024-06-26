import React, { useEffect, useState } from "react";
import { SearchForm } from "../components/SearchForm";
import { DataList } from "../components/DataList";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from "../store/accomsSlice";

export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState("");
  const [ status, setStatus ] = useState("")
  const fetchingDateList = useSelector(state => state.accoms.data)
  


  const fetchAccomData = async () =>{
    try {

      setStatus("loading")
      dispatch(fetchDataRequest());
      
      const response = await fetch("https://port-0-pj3-server-dc9c2nlt7zv05q.sel5.cloudtype.app/accommodation");
      // const response = await fetch("http://localhost:4000/accommodation");
      
      if(!response.ok){
        throw new Error ("Failed to fetch accommodations")
      }
      
      const data = await response.json();
      

      setStatus("successful")
      dispatch(fetchDataSuccess(data));
    }
    catch (error) {
      setStatus("error")
      dispatch(fetchDataFailure(error.message));
    }
  };


  useEffect(()=>{
    fetchAccomData()
  },[])



  const handleSearch = (newSearchResults) => {
    setSearchResults(newSearchResults);
  };
  

  let searchResultAnswer ;
  if(searchResults.length > 0 ){
    searchResultAnswer =fetchingDateList.filter(item => 
      item.accom_name.includes(searchResults) ||
      item.accom_info.includes(searchResults) ||
      item.description.includes(searchResults) ||
      item.province.includes(searchResults) 
    );
  } else{
    searchResultAnswer = fetchingDateList;
  }


  // const searchResultAnswer = searchResults.length > 0
  // ? fetchingDateList.filter(item =>
  //     item.accom_name.includes(searchResults) ||
  //     item.accom_info.includes(searchResults) ||
  //     item.description.includes(searchResults) ||
  //     item.province.includes(searchResults)
  //   )
  // : fetchingDateList;

let endCommonet;
if(status==="successful"){
  endCommonet = <p style={{textAlign:"center", color:"#c5c5c5"}}>목록 -끝-</p>
  if(searchResultAnswer.length === 0){
    endCommonet = <p style={{textAlign:"center", color:"#c5c5c5"}}>검색 결과가 없습니다.</p>
  }
}

// const endComment = (
//   <p style={{ textAlign: "center", color: "#c5c5c5" }}>
//     {status === "successful" && (searchResultAnswer.length === 0 ? "검색 결과가 없습니다." : "목록 -끝-")}
//   </p>
// );

  return (
    <>
      <main className="main">
        <SearchForm
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          onSearch={handleSearch}
          onClick={() => {
            navigate("/");
          }}
        />

          {
            status === 'successful' &&
              <DataList 
              fetchingDateList={searchResultAnswer}
              />
          }
          {
            status === 'loading' && <p >현재 페이지가 로딩중입니다. </p>
          }
          {
            status === 'error' && (
              <section>
                <p>어떤 사정으로 인하여 데이터를 로딩하지 못하였습니다.</p>
                <p>빠른 시일 내로 문제를 해결하도록 하겠습니다.😭🚧</p>
              </section>
              
            )
          }
          {endCommonet}

        <Header />
      </main>
      <Footer />
    </>
  );
};
