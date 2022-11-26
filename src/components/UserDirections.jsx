import React, {forwardRef, useEffect, useState} from "react";
import "./userdirections.css"
import {Button, Dropdown, Form} from "react-bootstrap";
import closeIcon from "../assets/images/x.svg"

const UserDirections = () => {
    const [directions, setDirections] = useState([])

    useEffect(() => {
        console.log("set dir")
        setDirections(getUserDirections())
    }, [])

    useEffect(() => {
        console.log("save dir")
        localStorage.setItem("UserDirections", JSON.stringify(directions));
    }, [directions])

    const addNewDirection = (dirId) => {
        let alreadyExist = directions.find(dir => dir.id === Number(dirId)) !== undefined;
        if (alreadyExist) return

        let newDirection = getAllDirections().find(dir => dir.id === Number(dirId))
        setDirections(dirs => {
            return [...dirs.filter(dir => dir.id !== dirId), newDirection]
        })
    }

    const removeDirection = (dirId) => {
        setDirections(d => d.filter(d => d.id !== dirId))
    }

    const AddButton = createAddButton(addNewDirection)

    return (
        <div className="directions-container">
            {directions.length === 0 && (
                <p className="m-0" style={{fontSize: '24px'}}>Добавьте новое направление!</p>
            )}
            {directions.map(d => (
                <div className={"direction " + d.color} key={d.id}>
                    <div>{d.name}</div>
                    <button onClick={() => removeDirection(d.id)} className="del-dir-btn">
                        <img src={closeIcon} alt=""/>
                    </button>
                </div>
            ))}
            {AddButton}
        </div>
    )
}

export default UserDirections

const createAddButton = (onSelectCallback) => {
    let allDirections = getAllDirections()

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
        <Dropdown onSelect={onSelectCallback}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"/>

            <Dropdown.Menu as={CustomMenu} className="add-btn-menu" >
                {allDirections.map(dir => <Dropdown.Item key={dir.id} eventKey={dir.id}>{dir.name}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
}

const getAllDirections = () => {
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

const getUserDirections = () => {
    let savedDirections = localStorage.getItem("UserDirections")

    if (savedDirections == null) return []

    return JSON.parse(savedDirections)
}