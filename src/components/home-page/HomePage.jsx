import React from "react";
import { HomeStyled } from "./HomeStyled";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <HomeStyled>
      <div className="home-container">
        <div className="text">
          <h1 className="main-text">Онлайн тесты на разные темы</h1>
          <h1 className="text-buttom">
            Простой и удобный сервис для создания тестов и проведения
            тестирования.
          </h1>
          <Link to="/home">
            <button className="btn">Начать работу</button>
          </Link>
        </div>
        <div>
          <img
            className="img"
            src="https://ouch-cdn2.icons8.com/3JRpuTVRdwiJPT5EoSwGky4CsgL1lU1D1bR7V0tQBjw/rs:fit:657:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTk4/LzFjMTQzYjJjLTFl/MzEtNDFhZS1hNzU4/LTA5MmEzOTdhYmNj/Mi5wbmc.png"
            alt=""
          />
        </div>
      </div>
    </HomeStyled>
  );
};

export default HomePage;
