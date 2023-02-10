import React from "react";
import Blogbannerleft from "../containers/blogbannerleft";
import Blogpagebannerright from "../containers/blogpagebannerright";
import Blogpagebannertop from "../containers/blogpagebannertop";
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