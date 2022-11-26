import React from "react";
import {
    Overlay,
    Popover,
    Button,
    ProgressBar,
    Container,
} from "react-bootstrap";
import { useRef, useState } from "react";

const TreeItem = ({ nodeDatum, toggleNode }) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [level, seLevel] = useState((Math.random() * 100).toFixed(2));

    return (
        <>
            {" "}
            <div
                style={{
                    width: "auto",
                    height: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onClick={toggleNode}
                ref={target}
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
            >
                <text fill="black" strokeWidth="1" dx="0">
                    {nodeDatum.name}
                </text>
            </div>
            <Overlay target={target.current} show={show} placement="top">
                {(props) => (
                    <Popover
                        id="popover-basic"
                        {...props}
                        onMouseOver={() => setShow(true)}
                        onMouseOut={() => setShow(false)}
                    >
                        <Popover.Header as="h3">
                            {nodeDatum.name}
                        </Popover.Header>
                        <Popover.Body>Уровень владения {level}%</Popover.Body>
                        <Container className="m-1">
                            {" "}
                            {level < 33 ? (
                                <ProgressBar variant="danger" now={level} />
                            ) : level < 66 ? (
                                <ProgressBar variant="warning" now={level} />
                            ) : (
                                <ProgressBar variant="success" now={level} />
                            )}
                        </Container>
                        <Button className="m-1 color-red">Подробности</Button>
                    </Popover>
                )}
            </Overlay>
        </>
    );
};

export default TreeItem;
