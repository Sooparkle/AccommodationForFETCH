import { SearchForm } from "../components/searchForm";
import { DataList } from "../components/DataList";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Main = () =>{
  const auth = useSelector((state)=>state.auth);
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
// DB에서 가져온 데이터 redux를 통해서 여기로 투하


  return (
    <>
      <h1>Main : index page</h1>
      <SearchForm onClick={()=>{navigate("/")}}/>
      
      {/* test 용 */}
      <button type="button" onClick={()=>{navigate("/search")}}>상세</button>
      
      <DataList />

    </>
  )
}