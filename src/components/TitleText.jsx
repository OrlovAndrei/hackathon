import React from "react";
import "./titletext.css"

const TitleText = (props) => {
    return <h2 className="mb-3 title-text text-center">{props.text}</h2>
}

export default TitleText