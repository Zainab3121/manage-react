import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Team from './pages/team/Team'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/team' element={<Team />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App