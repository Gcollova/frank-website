import React from 'react';
import {Routes,Route, Link} from 'react-router-dom'
import './App.css';

import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>

      
    
    </Routes>
  );
}

export default App;
