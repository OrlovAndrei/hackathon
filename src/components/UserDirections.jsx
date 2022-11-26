import React, {forwardRef, useEffect, useState} from "react";
import "./userdirections.css"
import {Button, Dropdown, Form} from "react-bootstrap";

const UserDirections = () => {
    const [directions, setDirections] = useState([])

    useEffect(() => {
        setDirections(getFakeDirections)
    }, [])

    const AddButton = createAddButton()

    return (
        <div className="directions-container">
            {directions.map(d => (
                <div className={"direction " + d.color} key={d.id}>
                    <div>{d.name}</div>
                </div>
            ))}
            {AddButton}
        </div>
    )
}

export default UserDirections

const createAddButton = () => {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <button
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="add-direction-btn"
        >
            +
        </button>
    ));

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <Form.Control
                        autoFocus
                        className="add-btn-search-field "
                        placeholder="Поиск"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled add-btn-menu-list">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value.toLowerCase()),
                        )}
                    </ul>
                </div>
            );
        },
    );

    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"/>

            <Dropdown.Menu as={CustomMenu} className="add-btn-menu">
                <Dropdown.Item eventKey="1">Frontend</Dropdown.Item>
                <Dropdown.Item eventKey="2">Backend</Dropdown.Item>
                <Dropdown.Item eventKey="3">Дизайн</Dropdown.Item>
                <Dropdown.Item eventKey="4">Системный аналитик</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

const getFakeDirections = () => {
    return [
        {
            name: 'Front-End',
            color: '',
            id: 1
        },
        {
            name: 'Back-End',
            color: 'green',
            id: 2
        },
        {
            name: 'Дизайн',
            color: 'orange',
            id: 3
        },
        {
            name: 'Тестирование',
            color: 'orange',
            id: 4
        },
        {
            name: 'Dev-Ops',
            color: 'red',
            id: 5
        }
    ]
}