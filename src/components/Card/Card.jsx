import React from "react";
import "./styles.css";

const Card = ({ nasa_id, title, description, href }) => {
  return (
    <>
      <div className="card" key={nasa_id}>
        <div className="card-text">
          <h1 className="title mb-4">{title}</h1>
          <p className="descript">{description}</p>
        </div>
        <div className="card-img">
          <img key={nasa_id} src={href} alt={title} />
        </div>
      </div>
    </>
  );
};

export default Card;
