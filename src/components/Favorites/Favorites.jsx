import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import "./styles.css";

const Favorites = () => {
  const [dates, setDates] = useState([]);
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const dateArray = JSON.parse(localStorage.getItem("dates") || "[]");
    const searchArray= JSON.parse(localStorage.getItem("searches") || "[]");
    setDates(dateArray);
    setSearches(searchArray);
  }, []);



  const deleteDate = (index) => {
    const updatedDates = [...dates];
    updatedDates.splice(index, 1);
    setDates(updatedDates);
    localStorage.setItem("dates", JSON.stringify(updatedDates));
  };

  const deleteAllDates = () => {
    setDates([]);
    window.localStorage.removeItem("dates");
  };

  const deleteSearch = (index) => {
    const updatedSearches = [...searches];
    updatedSearches.splice(index, 1);
    setSearches(updatedSearches);
    localStorage.setItem("searches", JSON.stringify(updatedSearches));
  };

  const deleteAllSearches = () => {
    setSearches([]);
    window.localStorage.removeItem("searches");
  };

  return (
    <div className="main pt-12 pb-12" id="#Fav">
      <div className="date mb-12 sm:mb-0 xl:mb-0">
        <h1 className="mb-8">My Favorite Dates</h1>
        <ul>
          {dates.map((date, index) => (
            <li key={index}>
              {date}
              <div className="ml-4">
                <button
                  className="delete-button flex items-center"
                  onClick={() => deleteDate(index)}
                >
                  Delete
                  <MdDeleteForever />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {dates.length > 0 && (
          <button className="delete-button mt-4 mb-2" onClick={deleteAllDates}>
            Delete All Dates
          </button>
        )}
      </div>

      <div className="fav sm:ml-12 xl:ml-12">
        <h1 className="mb-8">My Favorite Searches</h1>
        <div>
          <ul>
            {searches.map((search, index) => (
              <li key={index}>
                {search.slice(0,20)}
                <div>
                  <button
                    className="delete-button ml-4 flex items-center"
                    onClick={() => deleteSearch(index)}
                  >
                    Delete
                    <MdDeleteForever />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {searches.length > 0 && (
            <button
              className="delete-button mt-4 mb-2"
              onClick={deleteAllSearches}
            >
              Delete All Searches
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
