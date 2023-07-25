import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import './App.css';
import Footer from './components/layout/Footer';
import DonorList from "./components/donor/DonorList";
import CreateDonor from "./components/dashboard/CreateDonor";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./components/dashboard/dashoard";

function App() {

  return (
    <>
      <ToastContainer />
      <div className="container-fluid bg-light">
        <Navbar />
        <Routes>
          <Route path="/" element={<DonorList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-donor" element={<CreateDonor />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
