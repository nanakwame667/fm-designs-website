
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Categories from "./pages/Categories/Categories";
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index  element={<Home/>}/>
      <Route path="categories" element={<Categories/>}/>
      <Route path="gallery" element={<Gallery/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </Router>
  );
}

export default App;
