import React from "react";
import {NavLink} from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <div>MainPage</div>
            <NavLink to="/auth">login</NavLink>
        </>
    )
};

export default MainPage;
