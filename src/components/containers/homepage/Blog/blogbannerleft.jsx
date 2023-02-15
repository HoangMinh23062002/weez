import React from "react";
import { pl } from "../../../../assets/images";
import { car } from "../../../../assets/images";
import { blog } from "../../../../assets/images";

export default function Blogbannerleft(){
    return(
        <div className="blogpage__banner-left">
                    <div className="blogpage__banner-top">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </h3>
                        <p>December 8, 2022</p>
                        <img className="banner__top-img" src={blog} />
                        <p className="banner__top-para">Recently, two fresh graduates of class 2019-2022 Nguyen Anh Tuan and Nguyen Thi Thu Ha returned to PNV to share their knowledge of UI design using Figma for second-year students through a...</p>
                    </div>
                    <div className="blogpage__banner-bottom">
                        <div className="blogpage__banner-child">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </h3>
                            <p>December 8, 2022</p>
                            <img className="blogpage__banner-child-img" src={pl} />
                            <p className="blogpage__para">Recently, two fresh graduates of class 2019-2022 Nguyen Anh Tuan and Nguyen Thi Thu Ha returned to PNV to share their knowledge of UI design using Figma for second-year students through a...</p>
                        </div>
                        <div className="blogpage__banner-child">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </h3>
                            <p>December 8, 2022</p>
                            <img className="blogpage__banner-child-img" src={car} />
                            <p className="blogpage__para">Recently, two fresh graduates of class 2019-2022 Nguyen Anh Tuan and Nguyen Thi Thu Ha returned to PNV to share their knowledge of UI design using Figma for second-year students through lesson.hsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
                        </div>
                    </div>
                </div>
    )
}