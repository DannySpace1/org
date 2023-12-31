import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campotexto/Campotexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) =>{

    const[nombre,actualizarNombre] = useState("")
    const[puesto,actualizarPuesto] = useState("")
    const[foto,actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const[titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props
    const {equipos} = props

    const manejarEnvio = (e) => {

        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar ={

             nombre,
            puesto,
            foto,
            equipo

        }


        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {

        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})

    }

    return <section className="formulario">

        <form onSubmit={manejarEnvio}>

            <h2>Rellena el formulario para crear el colaborador.</h2>
            
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar Nombre" 
            valor = {nombre} 
            actualizarValor = {actualizarNombre}
            />

            <Campo
            titulo="Puesto" 
            placeholder="Ingresar Puesto"
            valor = {puesto} 
            actualizarValor = {actualizarPuesto}

            />

            <Campo
            titulo="Foto" 
            placeholder="Ingresar enlace de Foto"
            valor = {foto} 
            actualizarValor = {actualizarFoto}
            />

            <ListaOpciones 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={equipos}
            />

            <Boton 
            texto="Crear Colaborador"
            

            />

        </form>

        <form onSubmit={manejarNuevoEquipo}>

            <h2>Rellena el formulario para crear el colaborador.</h2>
            
            <Campo 
            titulo="Titulo" 
            placeholder="Ingresar titulo" 
            valor = {titulo} 
            actualizarValor = {actualizarTitulo}
            />

            <Campo 
            titulo="Color" 
            placeholder="Ingresar el color en Hexadecimal"
            valor = {color} 
            actualizarValor = {actualizarColor}
            type= "color"

            />

            <Boton 
            texto="Registrar Equipo"
            />
        </form>

    </section>

}

export default Formulario 