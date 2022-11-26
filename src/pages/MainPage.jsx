import React, {useEffect} from "react";
import {AUTH_PAGE} from "../util/consts";
import bg from "../assets/images/background.svg"
import {useNavigate} from "react-router-dom";
import totoro from "../assets/images/totoro.gif";

const MainPage = () => {
    let navigate = useNavigate()

    useEffect(() => {
        let random = Math.random() * 3000 + 500
        setTimeout(() => {
            let userId = localStorage.getItem("user_id");
            if (userId == null) {
                navigate(AUTH_PAGE)
            }
        }, random)
    }, [])

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: `url(${bg}) center, white`,
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <div style={{position: 'relative'}}>
                <img src={totoro} alt=""/>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    boxShadow: '0px 0px 50px 50px rgba(241, 243, 244, 1) inset'
                }}></div>
            </div>

        </div>
    )
};

export default MainPage;
