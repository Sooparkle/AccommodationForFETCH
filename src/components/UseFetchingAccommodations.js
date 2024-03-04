import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataFailure, fetchDataRequest,fetchDataSuccess } from "../store/accomsSlice";

const useFetchAccommodations = () =>{
  const dispatch = useDispatch();
  const [ accomList, setAccomList ] =useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null)

  useEffect(()=>{
    const fetchAccomData = async () =>{
      try{
        setLoading(true);
        dispatch(fetchDataRequest());

        const response = await fetch('http://localhost:4000/accommodation');
        const data = await response.json();

        setAccomList(data);
        dispatch(fetchDataSuccess(data));
      }
      catch(error) {
        setError(error || 'Failed to fetch accommodation') ;
        dispatch(fetchDataFailure(error.message));
      }
      finally{
        setLoading(false);
      }
    };

    fetchAccomData();
  }, [dispatch]);

  return{ accomList, loading, error};
};

export default useFetchAccommodations;