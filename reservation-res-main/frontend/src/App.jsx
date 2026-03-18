import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import Menu from './components/Menu';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import Bookings from './components/Bookings'; 
import './App.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} /> 
        <Route path='/success' element={<Success />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;