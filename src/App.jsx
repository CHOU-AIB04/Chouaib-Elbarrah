import { useState } from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Work from './Components/Works/Work'
import Contact from './Components/Contact/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Header />  
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Skils' element={<Skills />} />
      <Route path='/Work' element={<Work />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    </Router>

    </>
  )
}

export default App
