import React, {useState, useEffect} from 'react';
import { read } from './apiCore';
import Card from './Card';
import Navigation from './Navigation';

const Videogame = (props) => {
  const [videogame, setVideogame] = useState({});
  const [error, setError] = useState(false);

  const loadSingleVideogame = videogameId => {
    read(videogameId).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setVideogame(data);
      }
    });
  }

  useEffect(() => {
    const videogameId = props.match.params.videogameId;
    loadSingleVideogame(videogameId);
  }, [props])

  return (
    <>
    <Navigation/>
    <div className="container">
      <h2>This is the videogmae page!</h2>
      {
        videogame &&
        <Card videogame={videogame}/>
      }
    </div>
    </>
  )
}

export default Videogame;