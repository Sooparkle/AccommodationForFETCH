import './App.css';
import { Routes, Route} from "react-router-dom";
import { Login } from './pages/LogIn';
import { Home } from './pages/Home';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <Header />
    <div className='main'>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    
    </>
  );
}

export default App;
