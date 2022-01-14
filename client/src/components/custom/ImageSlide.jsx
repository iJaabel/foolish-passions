import React from "react";
import imgData from "../../dummy/data";

export default () => (
  <div className="jumbotron-fluid">
    <div id="slide-id" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        {imgData.forEach(({ title, src, alt }) => (
          <div className="carousel-item">
            <div className="layer" />
            <img className="scroll-image" title={title} src={src} alt={alt} />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#slide-id"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#slide-id"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);
