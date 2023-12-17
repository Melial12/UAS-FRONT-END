import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/page/home';
import Order from './components/page/dashboard';
import Blog from './components/page/blog';
import Reg from './components/page/reg';
import Login from './components/page/login';
import Riwayat from './components/riwayat/user';
import Edit from './components/riwayat/EditUser';
// import Add from './components/riwayat/AddUser';
import Add from './components/riwayat/AddUser';
import Contact from './components/page/contact';
import Harga from './components/page/harga';
import Transaksi from './components/page/transaksi';
import Ulasan from './components/page/ulasan';
import Me from './components/page/me';



const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<Riwayat />} />
      <Route path="/update/:id" element={<Edit />} />
      <Route path="/AddUser" element={<Add />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/harga" element={<Harga />} />
      <Route path="/transaksi" element={<Transaksi />} />
      <Route path="/ulasan" element={<Ulasan />} />
      <Route path="/me" element={<Me />} />
    </Routes>
  </BrowserRouter>
);
