import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { NotFound } from "./pages/NotFound";
import { Mypage } from "./pages/Mypage";
import { AccomsDetail } from "./components/AccomsDetail";
import { BookingConfirm } from "./components/BookingConfirm";
import { Login } from "./pages/Login";
import { PAGE_PATHS } from "./constants";
import { CallbackNaver } from "./components/CallbackNaver";
import { Main } from "./pages/Main";

const router = createBrowserRouter([
  {
    path:`${PAGE_PATHS.MAIN}`,
    element : <Main />,
    errorElement : <NotFound />,
  },
  {
    path: `${PAGE_PATHS.DETAIL}/:accommodationId`,
    element:<AccomsDetail />,
  },
  {
    path:`${PAGE_PATHS.BOOKINGS}/:accommodationId`,
    element:<BookingConfirm />,
  },
  {
    path:`/${PAGE_PATHS.MYPAGE}`,
    element:<Mypage />,
  },
  {
    path:`/${PAGE_PATHS.CALLBOOK}`,
    element: <CallbackNaver />
  },
  {
    path:`/${PAGE_PATHS.LOGIN}`,
    element:<Login />
  },

])




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
