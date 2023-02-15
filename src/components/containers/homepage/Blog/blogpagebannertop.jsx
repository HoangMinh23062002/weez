import React from "react";
import { banner } from "../../../../assets/images";

export default function Blogpagebannertop() {
    return (
        <div className="blogpage__banner">
            <img className="banner__image"
                src={banner} />
        </div>
    )
}