import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from "../store/accomsSlice";

const useFetchAccommodations = () => {
  const dispatch = useDispatch();
  const [ accomList, setAccomList ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(()=>{
    const fetchAccomData = async () =>{
      try {
        setLoading(true);
        dispatch(fetchDataRequest());

        // const response = await fetch("https://port-0-pj3-server-dc9c2nlt7zv05q.sel5.cloudtype.app/accommodation");
        const response = await fetch("http://localhost:4000/accommodation");
        const data = await response.json();

        setAccomList(data);
        dispatch(fetchDataSuccess(data));
      }
      catch{
        setError(error.message || 'Failed to fetch accommodations');
        dispatch(fetchDataFailure(error.message));
      }
      finally{
        setLoading(false);
      }
    };

    fetchAccomData();
  }, [dispatch]);

  return{ accomList, loading, error };

};
export default useFetchAccommodations;