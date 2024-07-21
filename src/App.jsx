/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx';
import Search from './components/Search.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Logout from './components/Logout.jsx';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import './utils/DarkMode.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/search" element={<ProtectedRoute element={<Search />} />} />
      </Routes>
      <ToastContainer autoClose={2000} position="bottom-center" hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable />
    </BrowserRouter>
  );
}

export default App;
