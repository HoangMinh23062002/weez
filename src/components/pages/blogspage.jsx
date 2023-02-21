import React from "react";
import Blogbannerleft from "../containers/Blog/Blogbannerleft";

import Blogpagebannerright from "../containers/Blog/Blogpagebannerright";
import Blogpagebannertop from "../containers/Blog/Blogpagebannertop";



export default function Blogspage(){
    return(
        <section className="blogpage__container">
            <Blogpagebannertop></Blogpagebannertop>
            <div  className="blogpage__banner-Content">
           <Blogbannerleft></Blogbannerleft>
            <Blogpagebannerright></Blogpagebannerright>
            </div>
        </section>
    )
}