
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";

import './index.css';
import Home from './views/Home';
import Add from './views/Add';
import Edit from './views/Edit';





createRoot(document.getElementById('root')).render(
  <div className="bg-slate-100 m-0 p-0 min-h-screen fixed w-full">
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<Add />} />
    <Route path="/edit/:userId" element={<Edit />} />
    
  </Routes>
  </BrowserRouter>
  </div>
);
