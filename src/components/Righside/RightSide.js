import './RightSide.css'

import React from 'react'

import Customer from '../customerReview/Customer';

const RightSide = () => {
  return (
    <div className='rightside'>
      <div>
        <h3>Sales Review</h3>
        <Customer/>
      </div>

      <div>
        <h3>Customer Review</h3>
        <Customer/>
      </div>
    </div>
  )
}

export default RightSide;