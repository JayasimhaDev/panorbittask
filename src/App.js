
import './App.css';
import Homepage from "./Componenets/Homepage";
import Profile from './Componenets/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route  path='/Profile' element={<Profile/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
