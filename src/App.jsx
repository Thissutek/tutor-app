import './App.css'
import NavBar from './components/NavBar'
import {Routes, Route } from "react-router";

// Pages Import
import HeroPage from './pages/Hero-Page';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HeroPage />}/> 
        <Route path='/about' element={<About />}/>
        <Route path='/testimonials' element={<Testimonials />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
