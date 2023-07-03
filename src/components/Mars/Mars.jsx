import React, { useState } from "react";
import "./styles.css";

const Mars = () => {
  const [dates, setDates] = useState([
    '2023-06-15',
    '2023-06-28',
    '2023-07-01'
  ]);

  const [searches, setSearches] = useState([
    'HTML',
    'CSS',
    'JavaScript'
  ]);

  const deleteDate = (index) => {
    const updatedDates = [...dates];
    updatedDates.splice(index, 1);
    setDates(updatedDates);
  };

  const deleteAllDates = () => {
    setDates([]);
  };

  const deleteSearch = (index) => {
    const updatedSearches = [...searches];
    updatedSearches.splice(index, 1);
    setSearches(updatedSearches);
  };

  const deleteAllSearches = () => {
    setSearches([]);
  };

  return (
    <div className="main">
      <h1>My Favorite Dates</h1>
      <ul>
        {dates.map((date, index) => (
          <li key={index}>
            {date}
            <button className="delete-button" onClick={() => deleteDate(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button className="delete-button" onClick={deleteAllDates}>
        Delete All Dates
      </button>

      <h1>My Favorite Searches</h1>
      <ul>
        {searches.map((search, index) => (
          <li key={index}>
            {search}
            <button className="delete-button" onClick={() => deleteSearch(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button className="delete-button" onClick={deleteAllSearches}>
        Delete All Searches
      </button>
    </div>
  );
}

export default Mars;
