import React, { useState } from "react";

export default ({ img }) => {
  const [count, setCount] = useState(0);

  let fpBanner = "https://imgur.com/442QYuR.jpg";
  let origin = "https://imgur.com/pALI3z5.jpg";

  let imgData = [
    {
      title: "Foolish Passions",
      src: "https://imgur.com/442QYuR.jpg",
      alt: "coney island Foolish Passions Pose",
    },
    {
      title: "Foolish Passions Origin Story",
      src: "https://imgur.com/pALI3z5.jpg",
      alt: "The origin of our logo",
    },
  ];

  const imgSetup = () => {
    // console.log("img Setup started...")
    imgData.forEach((img) => {
      // console.log("ran forEach with", img)
      let { src, title, alt } = img;
      return (
        <div className="carousel-item">
          <div className="layer" />
          <img className="scroll-image" src={src} alt={alt} title={title} />
        </div>
      );
    });
  };

  return (
    <div className="jumbotron-fluid">
      <div id="slide-id" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          {imgSetup()}
          {/* <div className="carousel-item active">
            <div className="layer" />
            <img
              className="scroll-image"
              src={fpBanner}
              title="Foolish Passions"
              alt="coney island Foolish Passions Pose"
            />
          </div>

          <div className="carousel-item">
            <div className="layer" />
            <img
              className="scroll-image"
              src={origin}
              title="Foolish Passions Origin Story"
              alt="The origin of our logo"
            />
          </div> */}
        </div>
        {/* --- --- */}
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
