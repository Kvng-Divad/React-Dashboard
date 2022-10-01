import "./sidebar.css";

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
//import logo from '../../assets/logo.jpg'
import { SidebarData } from "../Data/data"
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {

    
    const [expanded, setExpaned] = useState(false);

    window.addEventListener("resize", ()=>setExpaned(!expanded));

    const [show, setShow] = useState(false);


  const sidebarVariants = {
    true: {
      left : '0%'
    },
    false:{
      left : '-100%'
    }
  }
  



  return (
  <>
    <div className="bars" onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
     
    <motion.div className="sidebar"
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >

       <div className="bars2" onClick={()=>setShow(!show)}>
          <UilBars />
        </div>
        
        <div className="logo">
            
            <span
            className={show === true ? "title reveal": " title"}>
              E_<span>Shoppy</span>.</span>
        </div>

       

        <div className="menu">
            { SidebarData.map (( item, index) => {
              return(
              <NavLink to={item.link} className="link menuitem"
              activeClassName='active'
                key={index}
                onClick={ () => {
                  setExpaned(!expanded);
                }
                }
                >
                  <item.icon/>
                  <span className={show === true ? "title reveal": " title"}>
                    {item.heading}
                 </span>
               </NavLink>
              )
            })
            }

          <div className="menuitem signout">
            <UilSignOutAlt/>
          </div>

        </div>
    </motion.div>
    </>
  )
}

export default Sidebar;