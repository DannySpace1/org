import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    const {cambiarMostrar} = props
    const [mostrar, actualizarMostrar] = useState(true)

    const manejarClick = () => {

        console.log ("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)

    }

    return <section className="OrgSection">

        <h3 className="tittle">Mi Organización</h3>
        <img src="/img/Add.png" alt="add" onClick={cambiarMostrar}></img>

    </section>

}
export default MiOrg