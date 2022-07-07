import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Analytics from './Routes/Analytics';
import Customers from './Routes/Customers';
import Dashboard from './Routes/Dashboard';
import Orders from './Routes/Orders';
import Employees from './Routes/Employees';
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  return (
    
    <div className='body'>
        <div className='main-container'>
        <Sidebar/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Employees" element={<Employees />} />
            <Route path="/Analytics" element={<Analytics />} />
          </Routes>
        </div>
    
    </div>
    
    
  );
}

export default App;
