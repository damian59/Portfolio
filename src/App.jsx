import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Proyects from './components/Proyects'
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
      
      <Navbar/>
       
     <Routes>
      <Route  path='/home' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/proyects' element={<Proyects/>}/>
      <Route  path='/contact' element={<Contact/>}/>
     </Routes>
      
    </>
  )
}

export default App
