import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import MediaAuthButton from "../components/MediaAuthButton";
import "./authpage.css";
import authBg from "../assets/images/background.svg";
import authBgAlt from "../assets/images/alt-baclground.svg";

const AuthPage = () => {
    let [screen, setScreen] = useState("login");

    const onScreenChange = () => {
        setScreen(scr => scr === 'login' ? 'signup' : 'login');
        console.log(screen);
    }

    let sidePage = sidepage(screen, onScreenChange);

    return (
        <div className="h-100 d-flex auth-bg" style={{
            background: `url(${authBg}) center, #F1F3F4`, backgroundSize: 'cover'
        }}>
            <div className="m-auto d-flex justify-content-center auth-container" style={{
                background: `url(${authBgAlt}) center`, backgroundSize: 'cover'
            }}>
                <div className={"flex-grow-1 auth-register-container " + (screen === "login" ? "" : "hidden-container")}>
                    <div className="auth-sub-container">
                        <Form className="d-flex flex-column align-items-center auth-form">
                            <h2 className="mb-3 auth-header-text" style={{ color: '#3AB19B'}}>Вход</h2>
                            <div className="d-flex gap-2 mb-4">
                                <MediaAuthButton link="#" iconName="facebook"/>
                                <MediaAuthButton link="#" iconName="google"/>
                                <MediaAuthButton link="#" iconName="linkedin"/>
                            </div>
                            <p style={{fontSize: '11px', color: '#989B9A'}}>или используйте свою почту для входа</p>
                            <Form.Group className="mb-2 w-100 auth-form-group" controlId="authFormEmail">
                                <div className="inner-addon">
                                    <Form.Control type="email" placeholder="E-mail"  className="auth-field"/>
                                </div>
                            </Form.Group>
                            <Form.Group className="w-100 auth-form-group" controlId="formBasicPassword">
                                <div className="inner-addon">
                                    <Form.Control type="password" placeholder="Пароль"  className="auth-field"/>
                                </div>
                            </Form.Group>

                            <a href="#" className="mt-3 text-secondary">Забыли пароль?</a>

                            <Button variant="primary mt-5" type="submit" className="border-0 px-5 py-3 rounded-pill auth-submit-button">
                                Войти
                            </Button>
                        </Form>
                    </div>
                </div>
                {sidePage}
                <div className={"flex-grow-1 auth-register-container " + (screen === "signup" ? "" : "hidden-container")}>
                    <div className="auth-sub-container">
                        <Form className="d-flex flex-column align-items-center auth-form">
                            <h2 className="mb-3 auth-header-text" style={{ color: '#3AB19B'}}>Создайте Аккаунт</h2>
                            <div className="d-flex gap-2 mb-4">
                                <MediaAuthButton link="#" iconName="facebook"/>
                                <MediaAuthButton link="#" iconName="google"/>
                                <MediaAuthButton link="#" iconName="linkedin"/>
                            </div>
                            <p style={{fontSize: '11px', color: '#989B9A'}}>или используйте свою почту для регистрации</p>
                            <Form.Group className="mb-2 w-100 auth-form-group" controlId="authFormName" >
                                <div className="inner-addon auth-field">
                                    <Form.Control type="text" placeholder="Имя" className="auth-field"/>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-2 w-100 auth-form-group" controlId="authFormEmail">
                                <div className="inner-addon">
                                    <Form.Control type="email" placeholder="E-mail"  className="auth-field"/>
                                </div>
                            </Form.Group>
                            <Form.Group className="w-100 auth-form-group" controlId="formBasicPassword">
                                <div className="inner-addon">
                                    <Form.Control type="password" placeholder="Пароль"  className="auth-field"/>
                                </div>
                            </Form.Group>

                            <Button variant="primary mt-5" type="submit" className="border-0 px-5 py-3 rounded-pill auth-submit-button">
                                Зарегистрироваться
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const sidepage = (screen, onScreenChange) => {
    let header;
    let text;
    let buttonText;

    if (screen === 'signup') {
        header = "Добро пожаловать!"
        text = "Чтобы оставаться с нами на связи, пожалуйста, войдите"
        buttonText = "Войти"
    } else if (screen === 'login') {
        header = "Привет, Друг!"
        text = "Введите свои персональные данные и начните работать с нами! :)"
        buttonText = "Зарегистрироваться"
    }

    return <div className="auth-side d-flex flex-column align-items-center justify-content-center px-2">
        <h3 className="text-white auth-header-text text-center mb-4">{header}</h3>
        <p className="text-white text-center mb-5">{text}</p>
        <Button variant="outline-light" className="rounded-pill auth-side-button px-5 py-3" onClick={onScreenChange}>{buttonText}</Button>
    </div>;
}

export default AuthPage;