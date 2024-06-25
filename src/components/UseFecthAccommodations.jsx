import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from "../store/accomsSlice";

const useFetchAccommodations = () => {
  const dispatch = useDispatch();
  const [ accomList, setAccomList ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const fetchAccomData = async () =>{
    console.log("useComs")
    try {
      setLoading(true);
      dispatch(fetchDataRequest());
      
      // const response = await fetch("https://port-0-pj3-server-dc9c2nlt7zv05q.sel5.cloudtype.app/accommodation");
      const response = await fetch("http://localhost:4000/accommodation");
      
      if(!response.ok){
        throw new Error ("Failed to fetch accommodations")
      }
      
      const data = await response.json();
      

      setAccomList(data);
      dispatch(fetchDataSuccess(data));
    }
    catch (error) {
      setError(error.message || 'Failed to fetch accommodations');
      dispatch(fetchDataFailure(error.message));
    }
    finally{
      setLoading(false);
    }
  };
  
  useEffect(()=>{
    fetchAccomData();
    console.log("ef")
  }, []);

  return{ accomList, loading, error };

};
export default useFetchAccommodations;