import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import { FcPrevious, FcNext } from "react-icons/fc";
import "./styles.css";

const Search = () => {
  const [res, setRes] = useState([]);
  const [query, setQuery] = useState("GEMINI 4 FLIGHT");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHref, setSelectedHref] = useState(null);
  const [text, setText] = useState(null);
  const [count, setCount] = useState(1);
  const [isNext, setIsNext] = useState(true);
  const [isPrev, setIsPrev] = useState(false);

  const togglePopup = (href, text) => {
    setIsOpen(!isOpen);
    setText(text);
    setSelectedHref(href);
  };

  const handleFav = (id, title) => {
    console.log(id, title, "handle");
  };
  
  useEffect(() => {
    const fetchres = () => {
      try {
        fetch(
          `https://images-api.nasa.gov/search?q=${query}&media_type=image&page=${count}&page_size=3`
        )
          .then((response) => response.json())
          .then((data) => {
            const prevLink = data.collection.links.find(
              (link) => link.rel === "prev"
            );
            const nextLink = data.collection.links.find(
              (link) => link.rel === "next"
            );
            prevLink ? setIsPrev(true) : setIsNext(false);
            nextLink ? setIsNext(true) : setIsPrev(false);
            setRes(data.collection.items);
          })
          .catch((error) => {
            console.error("Error al obtener las imágenes:", error);
          });
      } catch (error) {
        console.error("Error al obtener las imágenes:", error);
      }
    };

    fetchres();
  }, [query, count]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="spaceX-container xl:h-screen sm:h-screen " id="SpaceX">
      <div className="">
        <h1 className="text-center text-white text-3xl sm:text-5xl xl:text-8xl titleSS">
          Spatial search
        </h1>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder={query}
          value={query}
          className="input"
          onChange={handleChange}
          onClick={() => setQuery("")}
        />
      </div>

      <div className="card-container flex sm:flex-row sm:flex-nowrap xl:flex-row xl:flex-nowrap flex-col">
        <div>
          <FcPrevious
            size={62}
            onClick={() => setCount(count - 1)}
            style={!isPrev || count === 1 ? { display: "none" } : undefined}
            className="cursor-pointer"
          />
        </div>
        {res.length > 0 ? (
          res.map((item) => {
            const data = item.data[0];
            const link = item.links[0];
            return (
              <Card
                key={data.nasa_id}
                nasa_id={data.nasa_id}
                title={data.title}
                description={`See more ...`}
                href={link.href}
                click={() => togglePopup(link.href, data.description)}
                fav={() => handleFav(data.nasa_id, data.title, data.keywords)}
              />
            );
          })
        ) : (
          <p>No matching results</p>
        )}{" "}
        {isOpen && (
          <Popup
            isOpen={isOpen}
            onClose={togglePopup}
            hrf={selectedHref}
            text={text}
          />
        )}
        <div>
          <FcNext
            size={62}
            onClick={() => setCount(count + 1)}
            style={!isNext ? { display: "none" } : undefined}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
