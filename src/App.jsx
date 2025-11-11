
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import TargetForm from './pages/TargetForm';
import Weeklyplan from './pages/Weeklyplan';


function App() {
 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/target-setup' element={<TargetForm/>}/>
      <Route path='/weekly-plan' element={<Weeklyplan/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
