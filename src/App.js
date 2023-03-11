import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Menu1 from './Components/Menu1';
import Menu2 from './Components/Menu2';
import Menu3 from './Components/Menu3';
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import Kalendar from './Components/Kalendar';
import Login from './Components/Login';
import {Route, Routes, BrowserRouter,Switch} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Navbar/> 
    
    <div className='container-fluid mt-5 full-container'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/weather' element={<Menu1/>}/>
        <Route path='/financial' element={<Menu2/>}/>
        <Route path='/user' element={<Menu3/>}/>
        <Route path='/Calculator' element={<Calculator/>}/>
        <Route path='/calendar' element={<Kalendar/>} />
      </Routes>

    </div> </BrowserRouter>
    
    </>
  );
}

export default App;
