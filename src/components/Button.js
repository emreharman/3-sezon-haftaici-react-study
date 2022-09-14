import React from "react";

import "../assets/css/buttons.css";

const Button = (props) => {
  console.log(props);
  if (props.type === "primary") {
    return (
      <button onClick={props.tiklaninca} className="primary">
        {props.buttonText}
      </button>
    );
  }
  if (props.type === "secondary") {
    return (
      <button onClick={props.tiklaninca} className="secondary">
        {props.buttonText}
      </button>
    );
  }
  return null;
};

export default Button;
