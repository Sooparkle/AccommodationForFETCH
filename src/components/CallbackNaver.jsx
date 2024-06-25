import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

export const CallbackNaver =() =>{
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const code = searchParams.get('code');
  const state = searchParams.get('state');

  console.log("cdoe", code);
  console.log("cdoe", state);

useEffect(()=>{
  const naver2th = async () =>{
    console.log("naver 2th 작동")
  try {
    const options = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({
        code,
        state,
      })
    }

  const response = await fetch('http://localhost:4000/callback', options);
  
  if(!response.ok){
    throw new Error(`data response fasiled ${response.status}`);
  }

  const data = await response.json();
  console.log("data done", data)
  }
  catch(error){
    console.error('Can not fetch API', error);
  }
}
  naver2th()
},[code])


  return(
    <div>

      <p>Naver CallBack is successful.</p>
    </div>
  )
}