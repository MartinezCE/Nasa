export const saveOrDelete = (value, data, setData) => {
  const updatedDates = [...data]; // Copia el array existente
  const existingIndex = updatedDates.indexOf(value);
  (existingIndex !== -1) && updatedDates.splice(existingIndex, 1)// Elimina la fecha existente
  updatedDates.push(value); // Agrega la fecha al final del array
  setData(updatedDates); // Actualiza el estado
  localStorage.setItem("dates", JSON.stringify(updatedDates)); // Guarda en el localStorage
};



export const checkExists = (key,data: string, setData) => {
  const storedData = JSON.parse(localStorage.getItem(`${key}`) || "[]");
  storedData.includes(data) ? setData(true) : setData(false);
};