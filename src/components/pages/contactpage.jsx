import React from "react";
import Contactbannerleft from "../containers/homepage/contactbannerleft";
import Contactbannerright from "../containers/homepage/contactbannerright";



export default function Contact(){
    return(
        <section className="Contactpage__Container">
           <Contactbannerleft></Contactbannerleft>
           <Contactbannerright></Contactbannerright>
        </section>
    )
}