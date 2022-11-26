import React, { useState } from "react";
import Tree from "react-d3-tree";

const data = {
    name: "Frontend",
    children: [
        {
            name: "HTML",
            attributes: {
                importance: "Обязательно",
            },
            children: [
                {
                    name: "CSS",
                    attributes: {
                        importance: "Желательно",
                    },
                    children: [
                        {
                            name: "Sass",
                            attributes: {
                                importance: "Необязательно",
                            },
                        },
                    ],
                },
                {
                    name: "Framework",
                    attributes: {
                        importance: "Желательно",
                    },
                    children: [
                        {
                            name: "React",
                            attributes: {
                                importance: "Необязательно",
                            },
                        },
                    ],
                },
            ],
        },
    ],
};

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
                width="100"
                height="50"
                y="-25"
                stroke={bc}
                fill="white"
                rx="5"
                ry="5"
            />
            <foreignObject width={100} height={50} y={-25}>
                <div
                    style={{
                        width: 100,
                        height: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onClick={toggleNode}
                >
                    <text fill="black" strokeWidth="1" dx="40">
                        {nodeDatum.name}
                    </text>
                </div>
            </foreignObject>
        </g>
    );
};

export default function RoadmapTree() {
    const { width, height } = window.screen;
    return (
        <div
            id="treeWrapper"
            style={{
                width: "100%",
                height: "100vh",
            }}
        >
            <Tree
                data={data}
                orientation="horizontal"
                renderCustomNodeElement={renderRectSvgNode}
                enableLegacyTransitions={true}
                translate={{ x: width / 4, y: height / 3 }}
            />
        </div>
    );
}
