import React, { useEffect, useState } from "react";
import './Home.css';
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from '../../components/TitleCards/TitleCards';
import hero_banner from '../../assets/hero_banner.png';
import hero_title from '../../assets/hero-title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [firstTrendingId, setFirstTrendingId] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2RjOGU1OGY4ZDA2MmVkNDE0NDVmZmNmODc1NmFhMSIsIm5iZiI6MTc1MjIwNjkwMy4wMTgsInN1YiI6IjY4NzA4ZTM3MmUzMTc2OWNmZTUxZjRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vcE8wdvuSXPyP7cizVkqx6s5x2WQqeuXYtHN-UpIsy0'
    }
  };

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setFirstTrendingId(res.results[0].id);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <img src={hero_banner} alt="Hero" className="banner_img" />

        <div className="hero_caption">
          <img src={hero_title} alt="Hero Title" className="caption_img" />
          <h3>Watch the Latest Trailer</h3>
          <p>These are the latest movie trailers. You get to enjoy them here and find your next watch.</p>

          <div className="hero-btns">
            {firstTrendingId && (
              <Link to={`/player/${firstTrendingId}`} className="btn">
                <img src={play_icon} alt="Play icon" className="btn-img" />
                Play
              </Link>
            )}
            <button className="btn dark-btn">
              <img src={info_icon} alt="Info icon" className="dark-btn-img" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* First Title Cards Section */}
      <div className="titlecards" id="trending">
        <TitleCards title="Trending Now" category="now_playing" />
      </div>

      {/* Additional Rows of Cards */}
      <div className="more-cards">
        <div id="blockbuster">
          <TitleCards title="Blockbuster Movies" category="top_rated" />
        </div>
        <TitleCards title="Only on Bestflix" category="popular" />
        <TitleCards title="Upcoming" category="upcoming" />
        <TitleCards title="Top Picks for You" category="now_playing" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

