import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import React from 'react';

import Home from './components/Home';
import Loginpage from './components/login';
import Createacc from './components/createaccount';
import ForgetPassword from './components/Forgetpassword';
import Verifyotp from './components/VerifyOtp';
import NewPassword from './components/Newpassword';
import Profile from './components/Profilepage';
import Stats from './components/Stats';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Adminpage from './components/Adminpage';
import Userlist from './components/userlist';
import ProductList from './components/productlist';
import Navbar from './components/Navbar';
import Addproduct from './components/Addproduct';
import Cart from './components/Cart';
import FilterPage from './components/Filterpage';
import Hover from './components/Category';
import Adminlogin from './components/adminlogin';
import AdminLayout from './components/Adminlayout';
import { ProtectedAdmin,ProtectedUser } from './components/protectedroute';
import SingleProduct from './components/Singleproduct';
import SearchResults from './components/Searchedproducts';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/createaccount" element={<Createacc />} />
        <Route path="/" element={<Home /> } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/verify-otp" element={<Verifyotp />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/search" element={<SearchResults />} />

        <Route path="/adminlayout" element={<ProtectedAdmin><AdminLayout /></ProtectedAdmin>}>
          <Route path="/adminlayout/adminpage" element={<Adminpage />} />
          <Route path="/adminlayout/userlist" element={<Userlist />} />
          <Route path="/adminlayout/productlist" element={<ProductList />} />
          <Route path="/adminlayout/stats" element={<Stats />} />
          <Route path="/adminlayout/addproduct" element={<Addproduct />} />
        </Route>
            <Route path="/product/:id" element={<SingleProduct />} />

        <Route path="/admin" element={<Adminlogin/>} /> {/* LOGIN PAGE SEPARATE */}

          <Route path="/cat" element={<Hover />} />
        <Route path="/filter/:category" element={<FilterPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
