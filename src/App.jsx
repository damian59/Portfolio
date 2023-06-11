import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './components/Projects'
import Contact from './pages/Contact'

import Footer from './components/Footer'

function App() {
  

  return (
    <>
      
      <Navbar/>
       
     <Routes>
     
      <Route  path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/proyects' element={<Projects/>}/>
      <Route  path='/contact' element={<Contact/>}/>
     </Routes>
      <Footer/>
    </>
  )
}

export default App
