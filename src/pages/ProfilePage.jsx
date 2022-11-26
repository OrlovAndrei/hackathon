import React, {useState} from "react";
import PagesLayout from "../components/PagesLayout";
import "./profilepage.css"

import avaPlaceholder from "../assets/images/ava1.jpeg";
import pen from "../assets/images/pen.svg"
import exitIcon from "../assets/images/exit.svg";
import {Button, Form} from "react-bootstrap";
import {MAIN_PAGE} from "../util/consts";
import {useNavigate} from "react-router-dom";
import TitleText from "../components/TitleText";

const ProfilePage = () => {
    const [name, setName] = useState("Имя")
    const [about, setAbout] = useState("Краткая информация о себе")
    const [edit, setEdit] = useState(false)

    const navigation = useNavigate()

    const toggleEdit = () => {
        setEdit(e => !e)
        if (name === "") {
            setName("Пользователь")
        }
    }

    const exitProfile = () => {
        navigation(MAIN_PAGE)
    }

    return (
        <PagesLayout>
            <div className="profile-wrapper">
                <div className="profile-info d-flex flex-column align-items-center justify-content-center">
                    <button className={"edit-button" + (edit ? " edit-button-active" : "")} onClick={toggleEdit}>
                        <img src={pen} alt=""/>
                    </button>
                    <div style={{flex: 1}}></div>
                    <img src={avaPlaceholder} className="avatar mb-4"/>
                    <div className="info-block">
                        {edit ? (
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control className="name name-textinput" type="text" placeholder="Ваше имя" value={name} onChange={(input) => setName(input.target.value)}/>
                            </Form.Group>
                        ) : (
                            <p className="name">{name}</p>
                        )}
                        {edit ? (
                            <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" className="about about-textarea" rows={3} placeholder="Краткая информация о себе" value={about} onChange={(input) => setAbout(input.target.value)}/>
                            </Form.Group>
                        ) : (
                            <div className="about">{about}</div>
                        )
                        }
                    </div>
                    <div style={{flex: 2}}></div>
                </div>
                <div className="profile-directions-container p-3">
                    <div className="d-flex justify-content-end mb-5">
                        <Button variant="link" className="text-decoration-none text-secondary" onClick={exitProfile}>
                            Выход{" "}
                            <img src={exitIcon} alt=""/>
                        </Button>
                    </div>
                    <TitleText text="Мои направления"/>
                </div>
            </div>
        </PagesLayout>
    )
}

export default ProfilePage