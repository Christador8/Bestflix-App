import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';

const Player = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2RjOGU1OGY4ZDA2MmVkNDE0NDVmZmNmODc1NmFhMSIsIm5iZiI6MTc1MjIwNjkwMy4wMTgsInN1YiI6IjY4NzA4ZTM3MmUzMTc2OWNmZTUxZjRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vcE8wdvuSXPyP7cizVkqx6s5x2WQqeuXYtHN-UpIsy0'
    }
  };

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => {
        console.log("🔍 VIDEO DATA:", res); // ✅ DEBUG: See what you're getting

        const video =
          res.results?.find(
            (v) => v.site === 'YouTube' && v.type === 'Trailer'
          ) || res.results?.[0];

        setApiData(video || {});
      })
      .catch((err) => console.error('❌ VIDEO FETCH ERROR:', err));
  }, [id]);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="Back Arrow Icon" className="back-icon" />

      {apiData?.key ? (
        <iframe
          width="90%"
          height="500"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title={apiData.name || 'Trailer'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p style={{ color: 'white', marginTop: '2rem' }}>
          🚫 No trailer available for this movie.
        </p>
      )}

      <div className="player-info">
        <p>{apiData.published_at || 'Unknown Release Date'}</p>
        <p>{apiData.name || 'Untitled Video'}</p>
        <p>{apiData.type || 'Video'}</p>
        <button className="btn">Play</button>
        <button className="btn dark-btn">Add to List</button>
      </div>
    </div>
  );
};

export default Player;

