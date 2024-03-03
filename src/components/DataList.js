
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from '../store/accomsSlice';
import { AccommodationLoop } from './AccommodationLoop';

export const DataList =()=>{
  const [ accumList, setAccomList ] = useState([]);
  const dispatch = useDispatch();
  const accums = useSelector(state => state.accums.data);
  const loading = useSelector(state => state.accums.loading);
  const error = useSelector(state => state.accums.error);

  useEffect(() =>{
    const fetchAccumData = async () =>{
      dispatch(fetchDataRequest())
      try{
        const response = await fetch('http://localhost:4000/accommodation');
        const data = await response.json();
        // console.log(" Accomudation data", data);
        dispatch(fetchDataSuccess(data));
        setAccomList(data)
      } catch(error){
        dispatch(fetchDataFailure(error.message))
      }
    }
    fetchAccumData();
  },[dispatch]);

  if (loading) {
    return <p>Loading accommodations...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
    }

  return (
  <>
    {
      accumList && accumList.map((item) => (
        <div className="data-list-wrap" key={item.id}>
          <AccommodationLoop item={item} />
        </div>
      ))
    }
  </>
  )
}