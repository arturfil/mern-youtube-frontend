import React, {useEffect, useState} from 'react';

const Card = ({videogame}) => {
  const [count, setCount] = useState(videogame.count)

  return (
    <div className="card m-10">
      <div className="">
        <p>{videogame.name}</p>
        {/* <p>${videogame.price}</p>
        <p>{videogame.category}</p> */}
      </div>
    </div>
  )
}

export default Card;