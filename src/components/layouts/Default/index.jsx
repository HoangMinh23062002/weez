import React from "react";
import Header from "../../pages/Header";
import Footer from "../../pages/Footer";

export default function Default({ children }) {
  return (
    <div>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
