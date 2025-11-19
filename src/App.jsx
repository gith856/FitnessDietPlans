
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import TargetForm from './pages/TargetForm';
import Weeklyplan from './pages/Weeklyplan';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';



function App() {
 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/target-setup' element={<TargetForm/>}/>
      <Route path='/weekly-plan' element={<Weeklyplan/>}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
