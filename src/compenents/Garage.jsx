import React from "react"
import Vehicule from "./Vehicule"

const Garage = () =>{
    const Triage = () =>{
        if (this.props.validite === this.props.validite.valide) {
        }
    }
    return(
        <div>
            <Vehicule marque="Mercedes Benz S 260" annee="1991" couleur="bleu" carburant="essence" validite="nonValide"/>
            <Vehicule marque="Fiat 500" annee="2010" couleur="noire" carburant="essence" validite="nonValide"/>
            <Vehicule marque="Volkswagen Crafter" annee="2016" couleur="blanche" carburant="diesel" validite="valide"/>
            <Vehicule marque="Bmw 114" annee="2012" couleur="blanche" carburant="diesel" validite="valide"/>
            <Vehicule marque="Audi A3" annee="2015" couleur="rouge" carburant="diesel" validite="valide"/>
        </div>
    )
    
}


export default Garage