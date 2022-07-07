import './RightSide.css'

import React from 'react'
import Updates from '../Updates/Updates';
import Customer from '../customerReview/Customer';

const RightSide = () => {
  return (
    <div className='rightside'>
      <div>
        <h3>Updates</h3>
        <Updates/>
      </div>

      <div>
        <h3>Customer Review</h3>
        <Customer/>
      </div>
    </div>
  )
}

export default RightSide;