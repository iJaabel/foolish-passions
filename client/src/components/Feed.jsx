import React from "react";
import "../animations/animations.css";

export default () => (
  <>
    <div className="jumbotron-fluid">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src="https://www.jquery-az.com/html/images/banana.jpg"
              title="Title of image"
              alt="alt text here"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.jquery-az.com/html/images/strawberries.jpg"
              title="A banana image"
              alt="Banana is good in taste!"
            />
          </div>Í
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
  </>
);
