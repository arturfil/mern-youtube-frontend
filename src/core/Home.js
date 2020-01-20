import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import {getVideogames} from './apiCore';
import Card from './Card';

const Home = () => {
  const [videogames, setVideogames] = useState([]);
  const [error, setError] = useState(false);

  const loadVideoGames = () => {
    getVideogames().then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setVideogames(data);
        console.log(data);
      }
    })
  }

  useEffect(() => {
    loadVideoGames();
  }, [])

  return (
    <div>
      <Navbar/>
      <div className="container">
      <div className="row m-10">
        {videogames.map((videogame, i) => (
          <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Card className="m-10" videogame={videogame} />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Home;