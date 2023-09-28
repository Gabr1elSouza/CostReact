import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/company' element={<Company/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/newproject' element={<NewProject/>} />
        <Route path='/project/:id' element={<Project/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
