import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [tur, setTur] = useState(1);
  const [mesaj, setMesaj] = useState("");

  const handleAzalt = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  const handleSifirla = () => {
    setCounter(0);
    setTur(1);
  };
  const handleArttir = () => {
    setCounter(counter + 1);
    if (counter % 9 === 0 && counter != 0) {
      setTur(tur + 1);
    }
    if (tur === 10) {
      setMesaj("Allah Kabul Etsin, bugünlük yeter");
      handleSifirla();
    }
  };

  return (
    <div>
      <h1 className="text-center">ZİKİR MATİK</h1>
      <h1 className="text-center">{counter}</h1>
      <div className="d-flex justify-content-center ">
        <button onClick={handleAzalt} className="btn btn-outline-danger mr-3">
          Azalt
        </button>
        <button onClick={handleSifirla} className="btn btn-outline-info mx-3">
          Sıfırla
        </button>
        <button onClick={handleArttir} className="btn btn-outline-primary">
          Arttır
        </button>
      </div>
      <p className="text-center my-4">Tur sayısı:{tur}</p>
      <p className="text-center my-4">{mesaj}</p>
    </div>
  );
};

export default Counter;
