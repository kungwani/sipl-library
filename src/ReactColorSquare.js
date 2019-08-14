import React from "react";
import ReactDOM from 'react-dom';
const ReactColorSquare = props => {
    const { width, height, color, text } = props;
    return (
      <div
        style={{
          width: width || 100,
          height: height || 100,
          backgroundColor: color || "blue"
        }}
      >
        {text}
      </div>
    );
  };
  export default ReactColorSquare;