import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {

  return (
    <>
    <ThemeProvider>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/services' element={<Services/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/projects' element={<Projects/>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
