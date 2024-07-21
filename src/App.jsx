/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Hourglass } from 'react-loader-spinner';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import './utils/DarkMode.js';

const Login = lazy(() => import('./components/Login.jsx'));
const Signup = lazy(() => import('./components/Signup.jsx'));
const Home = lazy(() => import('./components/Home.jsx'));
const Search = lazy(() => import('./components/Search.jsx'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute.jsx'));
const Logout = lazy(() => import('./components/Logout.jsx'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen w-screen">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#e92dff', '#6cc3ff']}
          />
        </div>
      }>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/search" element={<ProtectedRoute element={<Search />} />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} position="bottom-center" hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable />
    </BrowserRouter>
  );
}

export default App;
