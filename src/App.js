import './App.css';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Fpassword from "./components/fpassword"
import Timer from './components/timer';
import Parent from './components/messagee';
import route from "./routing";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/fpassword' element={<Fpassword/>}/>
      <Route path='/Timer' element={<Timer/>}/>
      <Route path='/Parent' element={<Parent/>}/> 
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
