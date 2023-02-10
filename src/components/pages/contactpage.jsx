import React from "react";
import Contactbannerleft from "../containers/contactbannerleft";
import Contactbannerright from "../containers/contactbannerright";


export default function Contact(){
    return(
        <section className="Contactpage__Container">
            <Contactbannerleft></Contactbannerleft>
            <Contactbannerright></Contactbannerright>
        </section>
    )
}