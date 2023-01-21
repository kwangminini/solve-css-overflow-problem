import { useState } from "react";
import "./styles.css";
import Tooltip from "./Tooltip";

export default function App() {
  const menuArr = new Array(10).fill(0);
  const [openTooltip, setOpenTooltip] = useState(undefined);

  const toggleTooltip = (idx, type) => {
    setOpenTooltip(type === "enter" ? idx : undefined);
  };
  return (
    <div className="App">
      <nav>네비</nav>
      <section className="content">
        <div
          className={`sideBarWrapper ${openTooltip ? "tooltip" : undefined}`}
        >
          <div className="sideBar">
            {menuArr.map((menu, idx) => {
              return (
                <div
                  className="menu"
                  key={idx}
                  onMouseEnter={() => toggleTooltip(idx + 1, "enter")}
                  onMouseLeave={() => toggleTooltip(idx + 1, "leave")}
                >
                  메뉴
                  {openTooltip === idx + 1 && <Tooltip />}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
