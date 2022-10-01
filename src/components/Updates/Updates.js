import "./Updates.css"

import React from 'react'
import { UpdatesData } from "../Data/data";

const Updates = () => {
  return (
    <div className="updates">
        {UpdatesData.map((update)=>{
            return(

                <div className="update">
                    <img src={update.img} alt='profile'/>
                    <div className="notification">
                            <span>{update.name}</span>
                            <span> {update.noti}</span>
                            <span>{update.time}</span>
                    </div>  
                </div>
                
            )
        })}

        <button className="btn">See All</button>
    </div>
  )
}

export default Updates;