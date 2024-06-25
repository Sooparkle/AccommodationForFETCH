import { useRouteError, Link } from "react-router-dom"

export const NotFound = () =>{
  const error = useRouteError();
  console.log(error);

  return(
    <div className="error-page">
      <h1>어느 여정 중 길을 잃으셨나봐요?</h1>
      <p>이곳은 존재 하지 않는 페이지 입니다. 혹시 길을 잃으셨을까요?</p>
      <p><i>{error.status.Text || error.message}</i></p>
      <Link path="/">메인 페이지 이동</Link>
    </div>
  );
};