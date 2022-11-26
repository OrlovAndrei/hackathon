import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./authpage.css";
import authBg from "../assets/images/background.svg";
import authBgAlt from "../assets/images/alt-baclground.svg";
import AuthFormContainer from "../components/AuthFormContainer";
import PagesLayout from "../components/PagesLayout";
import { useNavigate } from "react-router-dom";
import { PROFILE_PAGE } from "../util/consts";
import TitleText from "../components/TitleText";

const AuthPage = () => {
    let [screen, setScreen] = useState("login");

    const navigation = useNavigate();

    const onScreenChange = () => {
        setScreen((scr) => (scr === "login" ? "signup" : "login"));
        console.log(screen);
    };

    const registerHandle = () => {
        navigation(PROFILE_PAGE);
    };

    const loginHandle = () => {
        navigation(PROFILE_PAGE);
    };

    let sidePage = sidepage(screen, onScreenChange);

    return (
        <PagesLayout>
            <AuthFormContainer
                active={screen === "login"}
                title="Вход"
                subText="или используйте почту для входа"
                forms={
                    <>
                        <Form.Group
                            className="mb-2 w-100 auth-form-group"
                            controlId="authFormEmail"
                        >
                            <div className="inner-addon">
                                <Form.Control
                                    type="email"
                                    placeholder="E-mail"
                                    className="auth-field"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group
                            className="w-100 auth-form-group"
                            controlId="formBasicPassword"
                        >
                            <div className="inner-addon">
                                <Form.Control
                                    type="password"
                                    placeholder="Пароль"
                                    className="auth-field"
                                />
                            </div>
                        </Form.Group>
                    </>
                }
                buttonText="Войти"
                buttonAction={loginHandle}
                subButtonText="Зарегистрироваться"
                subButtonAction={onScreenChange}
            />
            {sidePage}
            <AuthFormContainer
                active={screen === "signup"}
                title="Создайте Аккаунт"
                subText="или используйте почту для регистрации"
                forms={
                    <>
                        <Form.Group
                            className="mb-2 w-100 auth-form-group"
                            controlId="authFormName"
                        >
                            <div className="inner-addon auth-field">
                                <Form.Control
                                    type="text"
                                    placeholder="Имя"
                                    className="auth-field"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group
                            className="mb-2 w-100 auth-form-group"
                            controlId="authFormEmail"
                        >
                            <div className="inner-addon">
                                <Form.Control
                                    type="email"
                                    placeholder="E-mail"
                                    className="auth-field"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group
                            className="w-100 auth-form-group"
                            controlId="formBasicPassword"
                        >
                            <div className="inner-addon">
                                <Form.Control
                                    type="password"
                                    placeholder="Пароль"
                                    className="auth-field"
                                />
                            </div>
                        </Form.Group>
                    </>
                }
                buttonText="Зарегистрироваться"
                buttonAction={registerHandle}
                subButtonText="Войти"
                subButtonAction={onScreenChange}
            />
        </PagesLayout>
    );
};

const sidepage = (screen, onScreenChange) => {
    let header;
    let text;
    let buttonText;

    if (screen === "signup") {
        header = "Добро пожаловать!";
        text = "Чтобы оставаться с нами на связи, пожалуйста, войдите";
        buttonText = "Войти";
    } else if (screen === "login") {
        header = "Привет, Друг!";
        text = "Введите свои персональные данные и начните работать с нами! :)";
        buttonText = "Зарегистрироваться";
    }

    return (
        <div className="auth-side d-flex flex-column align-items-center justify-content-center px-4">
            <h3 className="text-white auth-header-text text-center mb-4">
                {header}
            </h3>
            <p className="text-white text-center mb-5">{text}</p>
            <Button
                variant="outline-light"
                className="rounded-pill auth-side-button px-2 py-3"
                onClick={onScreenChange}
            >
                {buttonText}
            </Button>
        </div>
    );
};

export default AuthPage;
