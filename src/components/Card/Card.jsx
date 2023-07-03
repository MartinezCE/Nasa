import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import "./styles.css";

const Card = ({ nasa_id, title, description, href, fav,click }) => {
 
  const [like, setLike] = useState(false);

  const handleLike = () => {
    fav();
    setLike(!like);
  };
const handleClik = ()=>{
click();
  
}
  return (
    <>
      <div className="card" key={nasa_id}>
        <div onClick={handleClik} className="cursor-pointer">
          <div className="card-text">
            <h1 className="title  mb-6 text-base">{title}</h1>
            <p className="descript mt-16 text-base text-blue-300">{description}</p>
          </div>
          <div className="card-img">
            <img key={nasa_id} src={href} alt={title} />
          </div>
        </div>

        <button className="favorite cursor-pointer" onClick={handleLike}>
          <MdFavorite
            size={40}
            style={!like ? { display: "none" } : undefined}
          />
          <MdFavoriteBorder
            size={40}
            style={like ? { display: "none" } : undefined}
          />
        </button>
      </div>
    </>
  );
};

export default Card;
