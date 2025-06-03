import React, { useState } from "react";

function Form() {
  // Declaramos el estado count y su funcion de actualizacion setCount, el estado inicial es 0
  const [count, setCount] = useState(0);
  const [win, setWin] = useState(false);
  // Definimos la funcion handeIncrement, para sumar en 1 unidad a count
  const handleIncrement = () => {
    setCount(count + 1);
    if (count + 1 === 20) {
      setWin(true);
      setTimeout(() => {
        setWin(false);
      }, 1000);
    }
  };
  // Definimo la funcion handleDecrement, para restar en 1 unidad a count
  const handleDecrement = () => {
    setCount(count - 1);
    if (count - 1 === 20) {
      setWin(true);
      setTimeout(() => {
        setWin(false);
      }, 1500);
    }
  };
  console.log(count);
  return (
    <div className="relative min-h-screen  text-white font-semibold text-3xl grid place-items-center">
      <div className="w-fit px-10 bg-green-900 h-[600px] rounded-2xl shadow-2xl shadow-green-900 border-2 border-white/40">
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <h1>Incremento y decremento</h1>
          <div className="flex gap-2">
            <span>número:</span>
            <span className="text-4xl text-yellow-400 font-bold">{count}</span>
          </div>
          <div className="text-white flex gap-4">
            <button
              type="button"
              onClick={handleIncrement}
              className="px-2 py-1 border-2 border-white bg-green-600 rounded-xl"
            >
              Incrementar
            </button>
            <button
              type="button"
              onClick={handleDecrement}
              className="px-2 py-1 border-2 border-white bg-red-500 rounded-xl"
            >
              Decrementar
            </button>
          </div>
        </div>
      </div>
      {win && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-black grid place-items-center">
          <p>Tu ganaste!!!</p>
        </div>
      )}
    </div>
  );
}

export default Form;
