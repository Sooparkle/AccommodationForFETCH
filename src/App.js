import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import { Login } from './pages/LogIn';
import { Main } from './pages/Main';
import { Header } from './components/Header';
import { Search } from './pages/Search';
import { Mypage } from './pages/Mypage';

function App() {
  return (
    <>
    <Header />
    <div className='main'>
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} /> 
      </Routes>
      </div>
    
    </>
  );
}

export default App;
