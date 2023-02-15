import React from "react";
import Contactbannerleft from "../containers/homepage/Contact/contactbannerleft";
import Contactbannerright from "../containers/homepage/Contact/contactbannerright";


export default function Contact(){
    return(
        <section className="Contactpage__Container">
          <Contactbannerleft></Contactbannerleft>
        <Contactbannerright></Contactbannerright>
        </section>
    )
}