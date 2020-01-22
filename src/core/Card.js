import React, {useEffect, useState} from 'react';
import './Card.css';
import ShowImage from './ShowImage';

const Card = ({videogame}) => {
  const [count, setCount] = useState(videogame.count)

  return (
    <div className="card m-10 card-cont">
      <div className="">
        <ShowImage className="img" item={videogame} url="videogame"/>
        <p>{videogame.name}</p>
        <p>${videogame.price}</p>
        <p>{videogame.description}</p>
        <button className="btn btn-success">Ver Mas</button>
      </div>
    </div>
  )
}

export default Card;