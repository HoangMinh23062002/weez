import React from "react";
import "../../styles/components/__index.css";
import Contactbannerleft from "../containers/Contact/Contactbannerleft";
import Contactbannerright from "../containers/Contact/Contactbannerright";
import Footer from "./Footer";
import Header from "./Header";
export default function Contact() {
  return (
    <div>
      <Header />
      <section className="Contactpage__Container">
        <Contactbannerleft></Contactbannerleft>
        <Contactbannerright></Contactbannerright>
      </section>
      <Footer />
    </div>
  );
}
