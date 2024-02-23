import './App.css';
import { Routes, Route} from "react-router-dom";
import { Login } from './pages/LogIn';
import { Main } from './pages/Main';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <Header />
    <div className='main'>
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    
    </>
  );
}

export default App;
