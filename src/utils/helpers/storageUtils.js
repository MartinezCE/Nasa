export const saveOrDelete = (value, data, setData) => {
  const updatedDates = [...data]; 
  const existingIndex = updatedDates.indexOf(value);
  (existingIndex !== -1) && updatedDates.splice(existingIndex, 1)
  updatedDates.push(value); 
  setData(updatedDates); 
  localStorage.setItem("dates", JSON.stringify(updatedDates)); 
};



export const checkExists = (key,data: string, setData) => {
  const storedData = JSON.parse(localStorage.getItem(`${key}`) || "[]");
  storedData.includes(data) ? setData(true) : setData(false);
};