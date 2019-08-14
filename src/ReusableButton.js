import React from "react";
import ReactDOM from 'react-dom';
const ReusableButton = props => {
 
    return (
      <button className={props.className} > {props.buttonText} </button>
   );
  };
  export default ReusableButton;