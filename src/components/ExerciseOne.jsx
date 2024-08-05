"use client";
import React, { useRef } from "react";

const ExerciseOne = () => {
  
  const inputNameRef = useRef(null);
  const inputLastNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const inputCityRef = useRef(null);

  return (
    <div>
      <form>
        <label htmlFor="firstName">Nombre:</label>
        <input type="text" name="firstName" id="firstName" ref={inputNameRef} />
        <label htmlFor="lastName">Apellido:</label>
        <input type="text" name="lastName" id="lastName" ref={inputLastNameRef}/>
        <label htmlFor="age">Edad:</label>
        <input type="number" name="age" id="age" ref={inputCityRef} />
        <label htmlFor="city">Ciudad:</label>
        <input type="text" name="city" id="city" ref={inputCityRef}/>
        <input type="submit" />
      </form>
      <h1>
        {inputNameRef.current.value} {inputLastNameRef.current.value} tiene {inputAgeRef.current.value} años y vive en {inputCityRef.current.value} 
      </h1>
    </div>
  );
};

export default ExerciseOne;
