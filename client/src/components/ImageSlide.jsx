import React from "react";

export default () => {
  let src = "https://www.jquery-az.com/html/images/banana.jpg";

//   const returnSliderInidcators = (numberOfSlides) => {
//     if (!numberOfSlides) return;
//     if (numberOfSlides === 1) {
//       return (
//         <ol className="carousel-indicators">
//           <li data-target="#carousel" data-slide-to="0" className="active" />
//         </ol>
//       );
//     } else if (numberOfSlides >= 2) {
//       return (
//         <ol className="carousel-indicators">
//           <li data-target="#carousel" data-slide-to="0" className="active" />
//           <li data-target="#carousel" data-slide-to="1" />
//         </ol>
//       );
//     }
//   };

  return (
    <div className="jumbotron-fluid">
      <div id="slide-id" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src={src} title="" alt="" />
          </div>

          <div className="carousel-item">
            <img
              src="https://www.jquery-az.com/html/images/strawberries.jpg"
              title=""
              alt=""
            />
          </div>

          <div className="carousel-item">
            <img src={src} title="" alt="" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#slide-id"
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
          href="#slide-id"
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
