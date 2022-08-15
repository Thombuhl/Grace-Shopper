import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide mx-auto my-5"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-slide-to="0" className="active"></li>
          <li data-slide-to="1"></li>
          <li data-slide-to="2"></li>
          <li data-slide-to="3"></li>
          <li data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-caption d-none d-md-block">
            <p className="text-warning">Top Picks</p>
          </div>
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/public/logo.png"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/public/logo.png"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/public/logo.png"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/public/logo.png"
              alt="Fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/public/logo.png"
              alt="Fifth slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
