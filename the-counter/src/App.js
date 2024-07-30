import logo from './logo.svg';
//import './App.css';
import Home from  './Pages/Home'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
