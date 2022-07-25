import "./sidebar.css";

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import { SidebarData } from "../Data/data"
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {

    const [selected, setSelected] = useState(0);
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
    <div className="bars" style={expanded?{left: '40%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
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
            <img src={logo} alt=""/>
            <span
            className={show === true ? "title reveal": " title"}>
              E_<span>Shopy</span>.</span>
        </div>

       

        <div className="menu">
            { SidebarData.map (( item, index) => {
              return(
              <Link to={item.link} className={selected === index ?  "link menuitem active" : "menuitem link" }
                key={index}
                onClick={ () => {
                  setSelected(index)
                  setExpaned(!expanded);
                }
                }
                >
                  <item.icon/>
                  <span className={show === true ? "title reveal": " title"}>
                    {item.heading}
                 </span>
               </Link>
              )
            })
            }

          <div className="menuitem">
            <UilSignOutAlt/>
          </div>

        </div>
    </motion.div>
    </>
  )
}

export default Sidebar;