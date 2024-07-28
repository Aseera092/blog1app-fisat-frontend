import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Components/Create';
import Viewall from './Components/Viewall';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Create' element={<Create/>}/>
      <Route path='/Viewall' element={<Viewall/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App;
