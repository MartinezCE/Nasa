import React, { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import {key }from '../../utils/helpers/key';
import "./styles.css";

const Apod = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const maxDate = new Date().toISOString().split("T")[0];
  const [like, setLike] = useState(false);
  const [dates, setDates] = useState([]);

  const saveOrDelete = (date) => {
    const updatedDates = [...dates];
    const existingIndex = updatedDates.indexOf(date);
    existingIndex !== -1
      ? updatedDates.splice(existingIndex, 1)
      : updatedDates.push(date);
    setDates(updatedDates);
    setLike(!like);
    localStorage.setItem("dates", JSON.stringify(updatedDates));
  };
  
  const checkDateExists = (dateString) => {
    const storedDates = JSON.parse(localStorage.getItem("dates") || "[]");
    return storedDates.includes(dateString);
  };

  const handleLike = (date) => {
    saveOrDelete(date);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    setLike(checkDateExists(selectedDate));
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${selectedDate}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, [selectedDate]);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    user && setUser(user);
  }, []);

  useEffect(() => {
    setLike(checkDateExists(selectedDate));
  }, [selectedDate]);

  return (
    <div className="apodMain xl:h-screen sm:h-screen " id="APOD">
      <div className="apodMain-titles  xl:mt-14  sm:mt-14 mt-14 p-8">
        <h1 className="  text-3xl sm:text-5xl xl:text-8xl ">
          Astronomy picture of the day
        </h1>
        <h2 className="mt-8 text-center text-white text-2xl sm:text-3xl xl:text-5xl">
          Please choose a date to obtain the astronomical photo of the day
          {user && `, ${user}`}.
        </h2>
      </div>

      <div className="ApodContent xl:flex-row sm:flex-row flex-col-reverse">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          min="1995-07-16"
          max={maxDate}
        />
      </div>
      <div>
        {data && (
          <div
            className="cardview"
            style={{ backgroundImage: `url(${data.url})` }}
          >
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <h2 className="sm:text-3xl xl:text-6xl text-xl z-10">
                {data.title}
              </h2>
              <div className="data-container z-10">
                <p className="z-10">{data.explanation}</p>
              </div>
            </div>

            <button
              className="favorite cursor-pointer"
              onClick={() => {
                handleLike(data.date, data.title);
              }}
            >
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
        )}
      </div>
      <Popup hrf={data.url} isOpen={isOpen} onClose={togglePopup} text={data.explanation} />
    </div>
  );
};

export default Apod;
