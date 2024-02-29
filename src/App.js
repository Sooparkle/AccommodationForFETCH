import './App.css';
import { Routes, Route} from "react-router-dom";
import { Mypage } from './pages/Mypage';
import { Main } from './pages/Main';
import { Header } from './components/Header';
import { Search } from './pages/Search';

function App() {
  return (
    <>
    <Header />
    <div className='main'>
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      </div>
    
    </>
  );
}

export default App;
