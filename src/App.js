import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/company' element={<Company/>} />
        <Route exact path='/projects' element={<Projects/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/newproject' element={<NewProject/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
