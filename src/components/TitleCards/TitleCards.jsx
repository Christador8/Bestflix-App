import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title = "Popular Titles", category = "now_playing" }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2RjOGU1OGY4ZDA2MmVkNDE0NDVmZmNmODc1NmFhMSIsIm5iZiI6MTc1MjIwNjkwMy4wMTgsInN1YiI6IjY4NzA4ZTM3MmUzMTc2OWNmZTUxZjRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vcE8wdvuSXPyP7cizVkqx6s5x2WQqeuXYtHN-UpIsy0'
    }
  };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch((err) => console.error(err));
  }, [category]);

  const handleWheel = (e) => {
    e.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const el = cardsRef.current;
    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (el) {
        el.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="titlecards">
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} key={index} className="card-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${card.poster_path || card.backdrop_path}`}
              alt={card.title || card.original_title}
              className="card-image"
            />
            <div className="card-info">
              <h3>{card.title || card.original_title}</h3>
              <p>{card.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
