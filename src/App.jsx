import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login/Login';
import './App.css';
import { UserStorage } from './userContext';

const App = () => {
  return <div>
    <BrowserRouter>
      <UserStorage>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login/*" element={<Login/>}/>
        </Routes>
        <Footer/>
      </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;
