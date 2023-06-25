import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import './App.css';
import Footer from './components/layout/Footer';
import DonorList from "./components/donor/DonorList";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<DonorList />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
