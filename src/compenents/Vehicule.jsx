import React from "react"

const Vehicule = (props) =>{
    return(
        <div>
            <p>{props.marque}, {props.annee}, {props.couleur}, {props.carburant}, {props.validite}</p>

        </div>
    )
}
export default Vehicule