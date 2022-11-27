import React, {useEffect} from "react";
import {AUTH_PAGE, NEWS_PAGE} from "../util/consts";
import bg from "../assets/images/background.svg"
import {useNavigate} from "react-router-dom";
import totoro from "../assets/images/totoro.gif";
import "./mainpage.css"

const MainPage = () => {
    let navigate = useNavigate()

    useEffect(() => {
        let random = Math.random() * 2500 + 500
        setTimeout(() => {
          navigate(NEWS_PAGE)
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
            <div style={{position: 'relative'}} className="totoro-container">
                <img src={totoro} className="totoro"/>
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
