import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { NotFound } from "./pages/NotFound";
import { Search } from "./pages/Search";
import { Mypage } from "./pages/Mypage";
import { AccomsDetail } from "./components/AccomsDetail";
import { BookingConfirm } from "./components/BookingConfirm";
import { BookingFinished } from "./components/BookingFinished";

const router = createBrowserRouter([
  {
    path:"/",
    element : <App />,
    errorElement : <NotFound />,
  },
  {
    path: "/accomslist/:accommodationId",
    element:<AccomsDetail />,
  },
  {
    path:"/booking/:accommodationId",
    element:<BookingConfirm />,
  },
  {
    path:"/booking/result/",
    element:<BookingFinished />
  },
  {
    path:"/search",
    element:<Search />,
  },
  {
    path:"/mypage",
    element:<Mypage />,
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
