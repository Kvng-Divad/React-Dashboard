import "./Cards.css";

import React from 'react'
import { CardsData } from "../Data/data";
import Card from "../Card/card";

const Cards = () => {
  return (
    <div className="cards">
        {CardsData.map((card, id) => {
            return(
               <div className="cardscontainer">

                    <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        icon={card.icon}
                        series={card.series}
                    />

               </div>
            )
        })}
    </div>
  )
}

export default Cards;