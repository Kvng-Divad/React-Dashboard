import React from 'react'
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/Righside/RightSide';
import Sidebar from '../components/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    
      <div className='main-container2'>         
          <MainDash/>
          <RightSide/>
      </div>
    
  )
}

export default Dashboard