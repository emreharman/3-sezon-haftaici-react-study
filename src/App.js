import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import card1 from "./assets/img/card1.jpg";
import card2 from "./assets/img/card2.jpg";
import card3 from "./assets/img/card3.jpg";
import Counter from "./components/Counter";

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

const renkler = ["black", "red", "blue", "green", "pink", "gray"];

function App() {
  const [kullaniciAdi, setKullaniciAdi] = useState(
    "Henüz Kullnıcı adı girilmedi"
  );
  const [kutuRengi, setKutuRengi] = useState("black");
  const [usernameInput, setUsernameInput] = useState("");
  const [active, setActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setKullaniciAdi(`Hoşgeldin ${usernameInput}`);
  };

  const rengiDegistir = () => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    setKutuRengi(`rgb(${r},${g},${b})`);
    setActive(true);
  };

  return (
    <div>
      <Counter />
      {/* <h1 className="text-center my-4">React ile form işlemleri</h1>
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3">
          <input
            type="text"
            placeholder="usename"
            className="form-control"
            id="exampleInputEmail1"
            value={usernameInput}
            onChange={(event) => {
              setUsernameInput(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p className={active === true ? "active" : "passive"}>{kullaniciAdi}</p>
      <div
        className="my-5"
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid",
          backgroundColor: kutuRengi,
        }}
      ></div>
      <button id="renkBtn" onClick={rengiDegistir} className="btn btn-primary">
        Rengini Değiştir
      </button> */}
    </div>
  );
}

export default App;

/* 

-> DOM ve VDOM arasında bağlantı (state)
-> Componentlar arasında veri taşıma (props)
-> JSX 
*/
