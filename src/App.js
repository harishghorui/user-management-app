import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';

function App() {
  return (
    <div className='lg:flex bg-slate-700 min-h-screen text-slate-300'>
      
      <Navbar />

      <div className='flex-1 p-2 md:p-8 lg:h-screen lg:overflow-y-auto '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
