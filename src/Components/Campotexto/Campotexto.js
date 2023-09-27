import { useState } from "react"
import "./Campotexto.css"

const Campo = (props) => {

    const {actualizarValor, titulo, placeholder, valor,type="text"} = props



    const manejarCambio = (e) => {

        actualizarValor(e.target.value) }
    
    return <div className={`campo campo-${type}`}>

        <label>{titulo}</label>
        <input 
        placeholder={placeholder}
         required
         value={valor}    
         onChange={manejarCambio}
         type={type }
         />

    </div>

}

export default Campo