import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Topbar.css'
import Updates from '../Updates/Updates'
import {
    UilShoppingCart,
    UilBell,
    UilSearch,
    UilMessage,
    UilTimes,
} from "@iconscout/react-unicons";



const Topbar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);
  const toggleShow = () => setShow((s) => !s);
  const toggleShow1 = () => setShow1((s) => !s);
  const toggleShow2 = () => setShow2((s) => !s);
  return (
    <div className='topbar'>
        <div className='topLeft'>
        <UilSearch/>
        </div>
        <div className='topRight'>
          <>
            <UilShoppingCart onClick={toggleShow}/>
              <Offcanvas show={show} onHide={handleClose} scroll={true}
                  backdrop={true} placement='end' className='Canvas'>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
              
                </Offcanvas.Body>
              </Offcanvas>
          </>
        
        <>
          <UilBell onClick={toggleShow1}/>
            <Offcanvas show={show1} onHide={handleClose1} scroll='true'
                  backdrop='true' placement='end' className='Canvas noti'>
              <Offcanvas.Body>
                <div className='canvas-header'>
                  <UilTimes onClick={toggleShow1}/> 
                  <h3>Notifications</h3>
                </div>
                    
                <Updates/>
              </Offcanvas.Body>
            </Offcanvas>
        </>

        <>
        <UilMessage onClick={toggleShow2}/>
          <Offcanvas show={show2} onHide={handleClose2} scroll={true}
                  backdrop={true} placement='end' className='Canvas noti'>
          <Offcanvas.Body>
            <div className='canvas-header'>
              <UilTimes onClick={toggleShow2}/> 
              <h3>Messages</h3>
            </div>

            <Updates/>
          </Offcanvas.Body>
          </Offcanvas>        
        </>
        </div>
    </div>
  )
}

export default Topbar;