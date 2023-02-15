import React from "react";
import Blogbannerleft from "../containers/homepage/Blog/blogbannerleft";
import Blogpagebannerright from "../containers/homepage/Blog/blogpagebannerright";
import Blogpagebannertop from "../containers/homepage/Blog/blogpagebannertop";


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