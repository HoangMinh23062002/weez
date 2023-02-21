import React from "react";
import "../../styles/components/__index.css";
import Contactbannerleft from "../containers/Contact/Contactbannerleft";
import Contactbannerright from "../containers/Contact/Contactbannerright";

export default function Contact(){
    return(
        <section className="Contactpage__Container">
        
          <Contactbannerleft></Contactbannerleft>
        <Contactbannerright></Contactbannerright>
        </section>
    )
}