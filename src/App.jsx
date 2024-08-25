import { useState } from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Work from './Components/Works/Work'
import Contact from './Components/Contact/Contact'
import { Toaster } from 'react-hot-toast'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <Toaster position='top-right'/>
      <Header />  
      <Navbar />
      <Routes>
        <Route path='/Chouaib-Elbarrah/' element={<Home />} />
        <Route path='/Chouaib-Elbarrah/About' element={<About />} />
        <Route path='/Chouaib-Elbarrah/Skils' element={<Skills />} />
        <Route path='/Chouaib-Elbarrah/Work' element={<Work />} />
        <Route path='/Chouaib-Elbarrah/Contact' element={<Contact />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
