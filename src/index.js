import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"
import { Search } from "./pages/Search";
import { AccomsDetail } from "./components/AccomsDetail";
import { Mypage } from "./pages/Mypage";
import { BookingConfirm } from "./components/BookingConfirm";


const  router = createBrowserRouter([
  { 
    path:"/",
    element : <App />
  },
  {
    path:"/search",
    element :<Search />
  },
  {
    path:"/mypage",
    element:<Mypage />
  },
  {
    path:"/accomslist/:accommodationId",
    element : <AccomsDetail />
  },
  {
    path:'/booking/:accomdationId',
    element:<BookingConfirm />
  }

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
