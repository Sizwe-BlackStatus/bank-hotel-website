import React from "react";
import "./Hero.css";
import space from "../../assests/space.png";
import Header from "../../components/Header/Header.js";
import { GiFlowerStar } from "react-icons/gi";
import { FiOctagon } from "react-icons/fi";
import { VscChevronDown } from "react-icons/vsc";

function Hero() {
  return (
    <div className="hero">
      <Header />
      <div className="hero-text-container">
        <div className="hero-bank">
          <div className="hero-bank-texts">
            <h1>
              bank<span>hotel</span>
            </h1>
            <p>rooms // restaurant // congress hall // wine bar</p>
          </div>

          <div className="hero-btn-container">
            <div className="hero-btn">
              <GiFlowerStar className="star" />
              <p>since 1973</p>
            </div>
            <div className="hero-btn-text">
              <p>The luxurious hotel in the most beautiful European city with an exclusive restaurant, conference-hall, and art-bar.</p>
            </div>
          </div>
          <div className="vec-poly">
            <FiOctagon className="polygon" />
            <VscChevronDown className="vector" />
          </div>
        </div>
      </div>
      <div className="hero-img-container">
        <div className="hero-img">
          <img src={space} alt="" />
          <div className="form">
            <div className="checkIn-checkout-box">
                <p>check in</p>
                <VscChevronDown className="vector form-vector" />
                <div className="check-divider"></div>
                <p>check out</p>
                <VscChevronDown className="vector form-vector" />
            </div>
            <button className="form-btn">
              <p>book room</p>
            </button>
          </div>
        </div>
      </div>
      <div className="labels-container">
        <div className="telephone-congress-box">
          <p className="telephone">+38 032 297 50 20</p>
          <p className="art-congress">art & congress</p>
        </div>
        <div className="address-hall telephone-congress-box">
          <p className="address">8 lystopadovoho chynu,lviv</p>
          <p className="art-congress">hall</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
