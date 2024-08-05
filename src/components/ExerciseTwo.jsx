"use client"
import React, {useRef} from 'react'

const ExerciseTwo = () => {
    const inputRef = useRef(null);
    const imprimirValor = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
      };

    return (
        <div>
            <p>Texto {inputRef.current}</p>
            <form>
                <input type="text" ref={inputRef} />
                <button onClick={imprimirValor}>mostrar</button>
            </form>
        </div>
    )
}

export default ExerciseTwo
