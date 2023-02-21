import React from "react";
import { carpark } from "../../../assets/images";
import { pl } from "../../../assets/images";
import { car } from "../../../assets/images";
import { blog } from "../../../assets/images";

export default function Blogpagebannerright() {
    return(
        <div className="blogpage__banner_right">
        <div className="blogpage__banner-cate">
            <h2 className="title__cate">Categories</h2>
            <ul className="list__cate">
                <li>EZParking Partners (20)</li>
                <li>ChuCuoi Team (17)</li>
                <li>OrcaTank (10)</li>
                <li>PNV Student (8)</li>
                <li>Year - End Party (5)</li>
            </ul>
        </div>
        <div className="blogpage__banner-post">
            <h2 className="title__post">Most Popular</h2>
            
            <div className="blogpage__banner-post-content">
                <img className="post__content-img" src={carpark} />
                <h4 className="post__content-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>eiusmod tempor incididunt ut </h4>
            </div>
            <div className="post__content-info">
                <p>December</p>
                <p>By PNV-er</p>
            </div>
            <div className="blogpage__banner-post-content">
                <img className="post__content-img" src={pl} />
                <h4 className="post__content-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </h4>
            </div>
            <div className="post__content-info">
                <p>December</p>
                <p>By PNV-er</p>
            </div><div className="blogpage__banner-post-content">
                <img className="post__content-img" src={car} />
                <h4 className="post__content-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </h4>
            </div>
            <div className="post__content-info">
                <p>December</p>
                <p>By PNV-er</p>
            </div><div className="blogpage__banner-post-content">
                <img className="post__content-img" src={blog} />
                <h4 className="post__content-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </h4>
            </div>
            <div className="post__content-info">
                <p>December</p>
                <p>By PNV-er</p>
            </div>
        </div>
    </div>
    );
}