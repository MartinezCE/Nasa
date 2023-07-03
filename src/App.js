import React, {  useState, useEffect} from "react";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import "./index.css";

function App() {
  const [render, setRender] = useState(false);

  useEffect(() => {
    const name = window.sessionStorage.getItem('user');
    console.log(name)
     if(window.sessionStorage.getItem('user') || window.localStorage.getItem('user')){
      setRender(true)
     }
    }, [])
    

  const handleClick = () => {
    setRender(true);
  };



  return (
    <div className="App">
      {render ? <Main /> : <Login handleRender={handleClick} />}
    </div>
  );
}

export default App;
