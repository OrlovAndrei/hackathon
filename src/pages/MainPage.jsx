import React, {useEffect} from "react";
import {AUTH_PAGE} from "../util/consts";
import bg from "../assets/images/background.svg"
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    let navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            let userId = localStorage.getItem("user_id");
            if (userId == null) {
                navigate(AUTH_PAGE)

            }
        })
    })

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: `url(${bg}) center, white`,
            backgroundSize: 'cover'
        }}>

        </div>
    )
};

export default MainPage;
