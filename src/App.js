import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Principal from './pages/Principal';
import Pagina2 from './pages/Pagina2';
import Doce from './pages/Doce';


function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Principal/>}/>
      <Route path='/Pagina2' element={<Pagina2/>}/>
      <Route path='/Doce' element={< Doce/>} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
