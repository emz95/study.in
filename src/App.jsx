import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';

// Import all your page components
import GetStarted from './pages/GetStarted';
import Home from './pages/Home';
import Search from './pages/Search';
import Explore from './pages/Explore';
import Review from './pages/Review';
import SignUp from './pages/SignUp';
import Survey from './pages/Survey';
import Login from './pages/Login';
import AuthProvider from './contexts/AuthContext';


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>

    
      <Routes>
        {/* This route shows GetStarted page at the root URL "/" */}
        <Route path="/" element={<GetStarted />} />
        
         {/* No bottom nav for SignUp */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />


        
        {/* All these routes will use the Layout (header and bottom navigation) */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/review" element={<Review />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/survey" element={<Survey />} />
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;