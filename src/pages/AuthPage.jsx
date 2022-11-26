import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import MediaAuthButton from "../components/MediaAuthButton";
import "./authpage.css";
import authBg from "../assets/images/background.svg";
import authBgAlt from "../assets/images/alt-baclground.svg";
import AuthFormContainer from "../components/AuthFormContainer";

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
                <AuthFormContainer active={screen === 'login'} title="Вход" subText="или используйте почту для входа" forms={
                    <>
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
                    </>
                } buttonText="Войти" buttonAction={() => null} subButtonText="Зарегистрироваться" subButtonAction={onScreenChange}/>
                {sidePage}
                <AuthFormContainer active={screen === 'signup'} title="Создайте Аккаунт" subText="или используйте почту для регистрации" forms={
                    <>
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
                    </>
                } buttonText="Зарегистрироваться" buttonAction={() => null} subButtonText="Войти" subButtonAction={onScreenChange}/>
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

    return <div className="auth-side d-flex flex-column align-items-center justify-content-center px-4">
        <h3 className="text-white auth-header-text text-center mb-4">{header}</h3>
        <p className="text-white text-center mb-5">{text}</p>
        <Button variant="outline-light" className="rounded-pill auth-side-button px-2 py-3" onClick={onScreenChange}>{buttonText}</Button>
    </div>;
}

export default AuthPage;