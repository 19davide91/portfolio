import React, { useState, useRef } from "react";

function Door(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [dragX, setDragX] = useState(0);
  const doorRef = useRef(null);

  const handleDoorClick = () => {
    setIsOpen(true);
    setTimeout(props.onClick, 1000); // call onClick after 1s delay
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    setStartX(event.clientX || event.touches[0].clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const currentX = event.clientX || event.touches[0].clientX;
    const deltaX = currentX - startX;
    setDragX(deltaX);
    doorRef.current.style.transform = `rotateY(${deltaX * 5}deg)`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragX(0);
    doorRef.current.style.transform = "";
  };

  return (
    <div
      className={`door-container ${isOpen ? "fade-out" : ""}`}
      onClick={handleDoorClick}
    >
      <div
        className={`door ${isOpen ? "open" : ""} ${
          isDragging ? "dragging" : ""
        }`}
        ref={doorRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <div className="door-handle" />
        {!isOpen && (
          <p className="door-text">
            Welcome!
            <br />
            <br />
            Click to enter
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
