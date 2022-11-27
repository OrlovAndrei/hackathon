import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import "./authpage.css";
import AuthFormContainer from "../components/AuthFormContainer";
import PagesLayout from "../components/PagesLayout";
import {useNavigate} from "react-router-dom";
import {PROFILE_PAGE} from "../util/consts";
import {authenticate, register} from "../util/network";

const AuthPage = () => {
    let [screen, setScreen] = useState("login");

    let [loginEmail, setLoginEmail] = useState("")
    let [loginPassword, setLoginPassword] = useState("")

    let [registerName, setRegisterName] = useState("")
    let [registerEmail, setRegisterEmail] = useState("")
    let [registerPassword, setRegisterPassword] = useState("")

    let [errorMessage, setErrorMessage] = useState(null)

    const navigation = useNavigate()

    const onScreenChange = () => {
        setScreen(scr => scr === 'login' ? 'signup' : 'login');
        setErrorMessage(null)
    }

    const registerHandle = (e) => {
        e.preventDefault()
        if (registerName == "" || registerEmail == "" || registerPassword == "") {
            setErrorMessage("Заполните все поля")
            return
        }
        const validateEmail = (email) => {
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
        };
        if (!validateEmail(registerEmail)) {
            setErrorMessage("Введите корректный Email")
            return;
        }
        if (registerPassword.length < 4) {
            setErrorMessage("Пароль должен содержать минимум 4 символа")
            return
        }
        register(registerName, registerEmail, registerPassword).then(value => {
            if (value.id) {
                localStorage.setItem("user_id", value.id)
                navigation(PROFILE_PAGE)
            } else if (value.message) {
                setErrorMessage(value.message)
            } else {
                setErrorMessage("Попробуйте еще раз")
            }
        }).catch(err => setErrorMessage(err))
    }

    const loginHandle = async (e) => {
        e.preventDefault()
        // console.log([loginEmail, loginPassword])
        authenticate(loginEmail, loginPassword).then(json => {
            if (json.status !== 'ok') {
                if (json.message) {
                    setErrorMessage(json.message)
                } else {
                    setErrorMessage("Неверные данные")
                }
            } else {
                localStorage.setItem("user_id", json.user_id)
                navigation(PROFILE_PAGE)
            }
        }).catch(() => setErrorMessage('Что-то пошло не так'))
    }

    let sidePage = sidepage(screen, onScreenChange);

    return (
        <PagesLayout>
            <AuthFormContainer active={screen === 'login'} title="Вход" subText="или используйте почту для входа" errorMessage={errorMessage} forms={
                <>
                    <Form.Group className="mb-2 w-100 auth-form-group" controlId="authFormEmail">
                        <div className="inner-addon">
                            <Form.Control type="email" placeholder="E-mail"  className="auth-field" value={loginEmail} onChange={e => setLoginEmail(e.target.value)}/>
                        </div>
                    </Form.Group>
                    <Form.Group className="w-100 auth-form-group" controlId="authFormPassword">
                        <div className="inner-addon">
                            <Form.Control type="password" placeholder="Пароль"  className="auth-field" value={loginPassword} onChange={e => setLoginPassword(e.target.value)}/>
                        </div>
                    </Form.Group>
                </>
            } buttonText="Войти" buttonAction={loginHandle} subButtonText="Зарегистрироваться" subButtonAction={onScreenChange}/>
            {sidePage}
            <AuthFormContainer active={screen === 'signup'} title="Создайте Аккаунт" subText="или используйте почту для регистрации" errorMessage={errorMessage} forms={
                <>
                    <Form.Group className="mb-2 w-100 auth-form-group" controlId="regFormName" >
                        <div className="inner-addon auth-field">
                            <Form.Control type="text" placeholder="Имя" className="auth-field" value={registerName} onChange={e => setRegisterName(e.target.value)}/>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-2 w-100 auth-form-group" controlId="regFormEmail">
                        <div className="inner-addon">
                            <Form.Control type="email" placeholder="E-mail"  className="auth-field" value={registerEmail} onChange={e => setRegisterEmail(e.target.value)}/>
                        </div>
                    </Form.Group>
                    <Form.Group className="w-100 auth-form-group" controlId="regFormPassword">
                        <div className="inner-addon">
                            <Form.Control type="password" placeholder="Пароль"  className="auth-field" value={registerPassword} onChange={e => setRegisterPassword(e.target.value)}/>
                        </div>
                    </Form.Group>
                </>
            } buttonText="Зарегистрироваться" buttonAction={registerHandle} subButtonText="Войти" subButtonAction={onScreenChange}/>
        </PagesLayout>
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