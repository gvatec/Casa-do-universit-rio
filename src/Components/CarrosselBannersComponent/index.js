import React, { useState } from "react";
import "./style.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const CarrosselBannersComponent = (props) => {


  const divStyle = {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center",
  }

  const Banners = [
    {
      id: 1,
      banner:
        "https://img.imageboss.me/qb-content/width/1920/quality:95dpr:1/ff35cf14-04a0-4af6-9648-feec2e2c6f48.png",
    },
    {
      id: 2,
      banner:
        "https://img.imageboss.me/qb-content/width/1920/quality:95dpr:1/dc949b6a-938d-4f63-aa1e-e2a72d15aae9.png",
    },
    {
      id: 3,
      banner:
        "https://img.imageboss.me/qb-content/width/1920/quality:95dpr:1/dc949b6a-938d-4f63-aa1e-e2a72d15aae9.png",
    },
  ];

  return (
    < div className="slide-container" >
      <Slide infinite={true} arrows={true} duration={3000}>
        {Banners.map((slideImage, index) => (
          < div className="slideBox" key={index} >
            < div style={{ ...divStyle, 'backgroundImage': `url( ${slideImage.banner} )` }}>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
};

export default CarrosselBannersComponent;
