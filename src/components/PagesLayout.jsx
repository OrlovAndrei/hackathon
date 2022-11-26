import React from "react";
import "./pageslayout.css"
import authBg from "../assets/images/background.svg";
import authBgAlt from "../assets/images/alt-baclground.svg";

const PagesLayout = (props) => {
    return (
        <div className="h-100 d-flex auth-bg" style={{
            background: `url(${authBg}) center, #F1F3F4`, backgroundSize: 'cover'
        }}>
            <div className="m-auto d-flex justify-content-center page-container" style={{
                background: `url(${authBgAlt}) center`, backgroundSize: 'cover'
            }}>
                {props.children}
            </div>
        </div>
    )
}

export default PagesLayout