import React, { useState } from "react";
import "./style.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CarrosselBannersComponent = (props) => {
  const [count, setCount] = useState(1);

  const Banners = [
    {
      id: 1,
      banner:
        "https://img.imageboss.me/qb-content/width/1920/quality:95,dpr:1/ff35cf14-04a0-4af6-9648-feec2e2c6f48.png",
    },
    {
      id: 2,
      banner:
        "https://img.imageboss.me/qb-content/width/1920/quality:95,dpr:1/dc949b6a-938d-4f63-aa1e-e2a72d15aae9.png",
    },
    {
      id: 3,
      banner:
        "https://img.imageboss.me/qb-content/width/1920/quality:95,dpr:1/dc949b6a-938d-4f63-aa1e-e2a72d15aae9.png",
    },
  ];

  function stepBannerLeft() {
    document.querySelectorAll(".banner")[0].classList.add("removeanimation");
    document.querySelectorAll(".banner")[1].classList.add("removeanimation");
    document.querySelectorAll(".banner")[2].classList.add("removeanimation");
    if (count > 0) {
      setCount(count - 1);
    }

    if (count == 2) {
      document.querySelectorAll(".banner")[0].setAttribute("style", `transform: translateX(-200%)`);
      document.querySelectorAll(".banner")[1].setAttribute("style", `transform: translateX(-200%)`);
      document.querySelectorAll(".banner")[2].setAttribute("style", `transform: translateX(-200%)`);
    }
    if (count == 1) {
      document.querySelectorAll(".banner")[0].setAttribute("style", `transform: translateX(-100%)`);
      document.querySelectorAll(".banner")[1].setAttribute("style", `transform: translateX(-100%)`);
      document.querySelectorAll(".banner")[2].setAttribute("style", `transform: translateX(-100%)`);
    }
    if (count == 0) {
      document.querySelectorAll(".banner")[0].setAttribute("style", `transform: translateX(0%)`);
      document.querySelectorAll(".banner")[1].setAttribute("style", `transform: translateX(0%)`);
      document.querySelectorAll(".banner")[2].setAttribute("style", `transform: translateX(0%)`);
    }
  }
  function stepBannerRight() {
    document.querySelectorAll(".banner")[0].classList.add("removeanimation");
    document.querySelectorAll(".banner")[1].classList.add("removeanimation");
    document.querySelectorAll(".banner")[2].classList.add("removeanimation");

    if (count < 2) {
      setCount(count + 1);
    }
    if (count == 1) {
      document.querySelectorAll(".banner")[0].setAttribute("style", `transform: translateX(-100%)`);
      document.querySelectorAll(".banner")[1].setAttribute("style", `transform: translateX(-100%)`);
      document.querySelectorAll(".banner")[2].setAttribute("style", `transform: translateX(-100%)`);
    }
    if (count == 2) {
      document.querySelectorAll(".banner")[0].setAttribute("style", `transform: translateX(-200%)`);
      document.querySelectorAll(".banner")[1].setAttribute("style", `transform: translateX(-200%)`);
      document.querySelectorAll(".banner")[2].setAttribute("style", `transform: translateX(-200%)`);
    }
  }

  return (
    <section className="containerCarrossel">
      <div className="banneritem">
        {Banners.map((item) => {
          return <img key={item.id} className="banner" src={item.banner} alt="Banners"></img>;
        })}
        <button id="arrow1" onClick={stepBannerLeft}>
          <FiArrowLeft color="#2d2d2d" size={25}></FiArrowLeft>
        </button>
        <button id="arrow2" onClick={stepBannerRight}>
          <FiArrowRight color="#2d2d2d" size={25}></FiArrowRight>
        </button>
      </div>
    </section>
  );
};

export default CarrosselBannersComponent;
