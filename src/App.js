import './App.css';
import React from 'react';
import { Routes, Route, ScrollRestoration} from "react-router-dom";
import { Mypage } from './pages/Mypage';
import { Main } from './pages/Main';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <>
    <Header />
    <div className='main'>
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <ScrollRestoration />
      </div>
    
    </>
  );
}

export default App;
