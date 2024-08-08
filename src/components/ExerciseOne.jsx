"use client";
import React, { useRef, useState } from "react";

const ExerciseOne = () => {
  const [showText, setShowText] = useState("");
  const inputNameRef = useRef(null);
  const inputLastNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const inputCityRef = useRef(null);

  const printValue = (event) => {
    event.preventDefault();
    setShowText(
      `${inputNameRef.current.value} ${inputLastNameRef.current.value} tiene ${inputAgeRef.current.value} años y vive en ${inputCityRef.current.value}`
    );
    event.target.reset()
  };

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <form onSubmit={printValue} className="flex flex-col w-[300px] h-[250px] bg-slate-400 ">
        <label htmlFor="firstName">Nombre:</label>
        <input type="text" name="firstName" id="firstName" ref={inputNameRef} />
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          ref={inputLastNameRef}
        />
        <label htmlFor="age">Edad:</label>
        <input type="number" name="age" id="age" ref={inputAgeRef} />
        <label htmlFor="city">Ciudad:</label>
        <input type="text" name="city" id="city" ref={inputCityRef} />
        <input type="submit" value={"Enviar"}/>
      </form>
      <h1>{showText}</h1>
    </div>
  );
};

export default ExerciseOne;
