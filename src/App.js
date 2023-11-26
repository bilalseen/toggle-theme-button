import { useState, useEffect, img } from "react";
import "./index.css";
import moon from "./assets/images/moon.png";
import sun from "./assets/images/sunny.png";

function App() {
  const [icon, setIcon] = useState(sun);
  const [btnClass, setBtnClass] = useState("btn-container");
  const [iconClass, setIconClass] = useState("icon-container");

  useEffect(() => {
    const newIconClass =
      btnClass === "btn-container" ? "icon-container" : "icon-container-night";
    const newIcon = btnClass === "btn-container" ? sun : moon;

    setIconClass(newIconClass);
    setIcon(newIcon);
  }, [btnClass]);

  return (
    <div className="container">
      <button
        className={btnClass}
        onClick={() =>
          btnClass === "btn-container"
            ? setBtnClass("btn-container-night")
            : setBtnClass("btn-container")
        }
      >
        <div className={iconClass}>
          <img src={icon} className="icon-img" />
        </div>
      </button>
    </div>
  );
}

export default App;
