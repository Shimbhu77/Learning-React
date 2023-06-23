import React, { useState } from 'react';

const ColorPalette = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: color,
            width: '50px',
            height: '50px',
            margin: '5px',
            border: selectedColor === color ? '2px solid black' : 'none',
          }}
          onClick={() => handleColorClick(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPalette;
