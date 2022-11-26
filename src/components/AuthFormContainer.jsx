import React from "react";
import {Button, Form} from "react-bootstrap";
import MediaAuthButton from "./MediaAuthButton";
import "./authformcontainer.css";
import TitleText from "./TitleText";

const AuthFormContainer = (props) => {
    let active = props.active
    let title = props.title
    let subText = props.subText
    let forms = props.forms
    let buttonText = props.buttonText
    let buttonAction = props.buttonAction

    let subButtonText = props.subButtonText
    let subButtonAction = props.subButtonAction

    let errorMessage = props.errorMessage

    return(
        <div className={"flex-grow-1 auth-form-container " + (active ? "" : "hidden-container")}>
            <div className="auth-sub-container">
                <Form className="d-flex flex-column align-items-center auth-form">
                    <TitleText text={title}/>
                    <div className="d-flex gap-2 mb-4">
                        <MediaAuthButton link="#" iconName="facebook"/>
                        <MediaAuthButton link="#" iconName="google"/>
                        <MediaAuthButton link="#" iconName="linkedin"/>
                    </div>
                    <p style={{fontSize: '11px', color: '#989B9A'}}>{subText}</p>
                    <div className="w-100">
                        {forms}
                    </div>
                    <div className="w-75">
                        <p style={{
                            fontSize: '16px',
                            color: 'red',
                            padding: '1rem 0 0',
                            textAlign: 'center'
                        }}>{errorMessage}</p>
                    </div>
                    <div className="d-flex flex-column align-items-center w-100">
                        <Button variant="primary mt-5" type="submit" className="border-0 px-5 py-3 rounded-pill auth-submit-button" onClick={buttonAction}>
                            {buttonText}
                        </Button>
                        <Button variant="link" className="sub-button" onClick={subButtonAction}>{subButtonText}</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default AuthFormContainer