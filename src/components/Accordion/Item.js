import React, { useState } from "react";

import { CSSTransition } from "react-transition-group";

import ArrowDown from "public/images/icon-arrow-down.svg";

export default function Item({ name, id, child, active, toggle, children }) {
  const [Height, setHeight] = useState(() => 0);

  function calcHeight(e) {
    console.log(e);
    setHeight(e.offsetHeight);
  }

  return (
    <div className=" bg-white border-bwaGray-3 overflow-hidden">
      <div className="meta pl-4 py-2 relative flex justify-between items-center">
        <span className=" text-bwaGray-6">{name}</span>
        <button
          className="link-wrapped pr-5 focus:outline-none"
          onClick={() => toggle(id)}
        >
          {child && child.lenght > 0 && (
            <ArrowDown
              className={[
                "transition-all duration-300 transform",
                active === id ? "rotate-180" : "rotate-0",
              ].join(" ")}
            ></ArrowDown>
          )}
        </button>
      </div>

      <div
        className=" transition-all duration-500"
        style={{ height: active === id ? Height : 0 }}
      >
        <CSSTransition
          in={active === id}
          timeout={500}
          onEnter={calcHeight}
          className="accordion-item"
        >
          <div className="accordion-item ">
            <div className="py-2 bg-bwaGray-1">{children}</div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}