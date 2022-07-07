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
                        <div>
                            <span>{update.name}</span>
                            <span> {update.noti}</span>
                        </div>
                            <span>{update.time}</span>
                    </div>
                    
                </div>
            )
        })}
    </div>
  )
}

export default Updates;