import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';

import Navbar from './Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
    <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path="/" exact Component={Home} />
        <Route path='/About' exact Component={About}/>
        <Route path="/Services" exact Component={Services}/>
        <Route path="/Contact" exact Component={Contact}/>
      </Routes>
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
