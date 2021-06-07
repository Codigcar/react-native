import { useState } from "react";


const UseStateApp = () => {

    const [contador, setContador] = useState(0)

    const movimiento = (numero: number) => {
        setContador(contador + numero)
    }

    return (
        <>
            <h1>UseState - contador</h1>
            <h3>Contador: {contador}</h3>
            <button onClick={() => movimiento(1)} className="btn btn-primary">+1</button>
            &nbsp;
            <button onClick={() => movimiento(-1)} className="btn btn-primary">-1</button>
        </>
    )
}

export default UseStateApp;