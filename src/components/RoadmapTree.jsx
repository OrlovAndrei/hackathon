import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { fetchDirectionById } from "../api/directionAPI";

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => {
    let bc = "red";
    switch (nodeDatum.attributes?.importance) {
        case "Обязательно":
            bc = "red";
            break;
        case "Желательно":
            bc = "orange";
            break;
        case "Необязательно":
            bc = "green";
            break;
        default:
            break;
    }
    return (
        <g>
            <rect
                width="200"
                height="50"
                x="-100"
                stroke={bc}
                fill="white"
                rx="5"
                ry="5"
            />
            <foreignObject width={200} height={50} x={-100}>
                <OverlayTrigger
                    trigger="hover"
                    placement="top"
                    overlay={
                        <Popover id={`popover-positioned-`}>
                            <Popover.Header as="h3">{`Popover `}</Popover.Header>
                            <Popover.Body>
                                <strong>Holy guacamole!</strong> Check this
                                info.
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <div
                        style={{
                            width: "auto",
                            height: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onClick={toggleNode}
                    >
                        <text fill="black" strokeWidth="1" dx="0">
                            {nodeDatum.name}
                        </text>
                    </div>
                </OverlayTrigger>
            </foreignObject>
        </g>
    );
};

export default function RoadmapTree(directionId) {
    const { width, height } = window.screen;

    let schema = require("../assets/trees/frontend.json");
    return (
        <div
            id="treeWrapper"
            style={{
                width: "100%",
                height: "100vh",
            }}
        >
            <Tree
                data={schema}
                orientation="vertical"
                renderCustomNodeElement={renderRectSvgNode}
                enableLegacyTransitions={true}
                translate={{ x: width / 2, y: height / 3 }}
                depthFactor="200"
                shouldCollapseNeighborNodes={true}
                nodeSize={{ x: 250, y: 50 }}
                initialDepth={1}
                zoom={0.6}
            />
        </div>
    );
}
