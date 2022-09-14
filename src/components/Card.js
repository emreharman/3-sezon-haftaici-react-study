import React from "react";
import Button from "./Button";

const Card = (props) => {
  console.log(props);
  return (
    <div style={{ border: "1px solid black" }}>
      <div>
        <img style={{ width: "150px" }} src={props.imgSrc} alt="" />
      </div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div>
        <Button
          buttonText="devamını oku..."
          type="primary"
          tiklaninca={props.onClick}
        />
      </div>
    </div>
  );
};

export default Card;
