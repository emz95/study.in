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
import Preferences from './pages/Preferences';
import Login from './pages/Login';
import Profile from './pages/Profile'


function App() {
  return (
    <BrowserRouter>

    
      <Routes>
        {/* This route shows GetStarted page at the root URL "/" */}
        <Route path="/" element={<GetStarted />} />
        
         {/* No bottom nav for SignUp */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/preferences" element={<Preferences />} />



        
        {/* All these routes will use the Layout (header and bottom navigation) */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/review" element={<Review />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;