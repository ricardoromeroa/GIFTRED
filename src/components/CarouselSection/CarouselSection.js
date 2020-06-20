import React from "react";
import imagen1 from "../../assets/img/logo.png";
import imagen2 from "../../assets/img/c2.jpg";
import imagen3 from "../../assets/img/pan2.jpg";
import imagen4 from "../../assets/img/barbero.jpg";

const CarouselSection = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imagen1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imagen2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imagen3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imagen4} className="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselSection;
