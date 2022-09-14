import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import card1 from "./assets/img/card1.jpg";
import card2 from "./assets/img/card2.jpg";
import card3 from "./assets/img/card3.jpg";

const cards = [
  {
    img: card1,
    title: "nature 1",
    description: "nature 1 kısa açıklama",
  },
  {
    img: card2,
    title: "nature 2",
    description: "nature 2 kısa açıklama",
  },
  {
    img: card3,
    title: "nature 3",
    description: "nature 3 kısa açıklama",
  },
  {
    img: card1,
    title: "nature 1",
    description: "nature 1 kısa açıklama",
  },
  {
    img: card2,
    title: "nature 2",
    description: "nature 2 kısa açıklama",
  },
  {
    img: card3,
    title: "nature 3",
    description: "nature 3 kısa açıklama",
  },
  {
    img: card1,
    title: "nature 1",
    description: "nature 1 kısa açıklama",
  },
  {
    img: card2,
    title: "nature 2",
    description: "nature 2 kısa açıklama",
  },
  {
    img: card3,
    title: "nature 3",
    description: "nature 3 kısa açıklama",
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Button
        buttonText="Buton 1"
        type="primary"
        tiklaninca={() => {
          console.log("buton1e basıldı");
        }}
      />
      <Button
        buttonText="Buton 2"
        type="secondary"
        tiklaninca={() => {
          alert("buton2den mesaj");
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {cards.map((item, index) => {
          return (
            <Card
              key={index}
              imgSrc={item.img}
              title={item.title}
              description={item.description}
              onClick={() => {
                console.log(item.title + "ına gidecek");
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

/* 

-> DOM ve VDOM arasında bağlantı (state)
-> Componentlar arasında veri taşıma (props)
-> JSX 

*/
//Button()
