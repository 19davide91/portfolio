import React, { useState } from "react";

function Door(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDoorClick = () => {
    setIsOpen(true);
    setTimeout(props.onClick, 1000); // call onClick after 1s delay
  };

  return (
    <div
      className={`door-container ${isOpen ? "fade-out" : ""}`}
      onClick={handleDoorClick}
    >
      <div className={`door ${isOpen ? "open" : ""}`}>
        <div className="door-handle" />
        {!isOpen && (
          <p className="door-text">
            Welcome!
            <br />
            <br />
            Clik to enter
            <br />
            <br />
            👆
          </p>
        )}
      </div>
    </div>
  );
}

export default Door;
