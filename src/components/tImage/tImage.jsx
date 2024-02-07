import React from "react";

function TImage({ content }) {
  return (
    <>
      {content.map((item,index) => {
        return (
          <div className="testi col-1" key={index}>
            <img src={item.img} className="img-fluid" alt="user" />
          </div>
        );
      })}
    </>
  );
}

export default TImage;
