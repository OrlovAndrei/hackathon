import React from "react";
import { Overlay, Tooltip, Popover, Button } from "react-bootstrap";
import { useRef, useState } from "react";

const TreeItem = ({ nodeDatum, toggleNode }) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

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
                        <Popover.Body>
                            Уровень владения {(Math.random() * 100).toFixed(2)}%
                        </Popover.Body>
                        <Button className="m-1">Подробности</Button>
                    </Popover>
                )}
            </Overlay>
        </>
    );
};

export default TreeItem;
