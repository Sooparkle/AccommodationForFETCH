import './App.css';
import React from 'react';
import { Routes, Route, ScrollRestoration} from "react-router-dom";
import { Mypage } from './pages/Mypage';
import { Main } from './pages/Main';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <main className='main'>
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
