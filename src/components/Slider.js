import { React, useState } from "react";
import "./Slider.css";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "./data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = () => {};

  return (
    <>
      <div className="slider-container">
        <div className="slider-arrow-left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </div>
        <div className="wrapper">
          {sliderItems.map((item) => (
            <div
              className="slidesContainer"
              style={{ backgroundColor: item.bg }}
            >
              <div className="imageContainer">
                <img className="image-style" src={item.img} alt="image1" />
              </div>
              <div className="infoContainer">
                <div className="title">{item.title}</div>
                <div className="description">{item.desc}</div>
                <div className="btn">
                  <button className="btnStyle">SHOP NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="slider-arrow-right"
          onClick={() => handleClick("right")}
        >
          <ArrowRightOutlined />
        </div>
      </div>
    </>
  );
};

export default Slider;
