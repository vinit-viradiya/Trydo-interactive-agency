import React from "react";

function Slide({ content }) {
  return (
    <>
      {content.map((slide,index) => {
        return (
          <div className="slide p-4 px-3 col-3" key={index}>
            <div className="p-img">
              <img src={slide.img} alt="portfolio-img" />
            </div>
            <div className="p-content">
              <p>{slide.title}</p>
              <a href="#">{slide.link}</a>
              <button className="button mt-4">CASE STUDY</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Slide;
