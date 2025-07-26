import React from "react";
import './Home.css';
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from '../../components/TitleCards/TitleCards';
import hero_banner from '../../assets/hero_banner.png';
import hero_title from '../../assets/hero-title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <img src={hero_banner} alt="Hero" className="banner_img" />

        <div className="hero_caption">
          <img src={hero_title} alt="Hero Title" className="caption_img" />
          <h3>The Savior's Quest</h3>
          <p>A young woman goes on a quest to save the world from extraterrestrial creatures.</p>

          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="Play icon" className="btn-img" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="Info icon" className="dark-btn-img" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* First Title Cards Section */}
      <div className="titlecards">
        <TitleCards title="Trending Now" category="now_playing" />
      </div>

      {/* Additional Rows of Cards */}
      <div className="more-cards">
        <TitleCards title="Blockbuster Movies" category="top_rated" />
        <TitleCards title="Only on Bestflix" category="popular" />
        <TitleCards title="Upcoming" category="upcoming" />
        <TitleCards title="Top Picks for You" category="now_playing" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

