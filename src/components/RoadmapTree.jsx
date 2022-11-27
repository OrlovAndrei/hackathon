import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { Context } from "..";
import "./roadmaptree.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PROFILE_PAGE } from "../util/consts";
import TreeItem from "./TreeItem";
import {fetchSchema} from "../util/network";

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => {
    let bc = "red";
    let sw = "1";
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
    if (nodeDatum.children) sw = "5";
    return (
        <g>
            <rect
                width="200"
                height="50"
                x="-100"
                stroke={bc}
                strokeWidth={sw}
                fill="white"
                rx="5"
                ry="5"
            />
            <foreignObject width={200} height={50} x={-100}>
                <TreeItem nodeDatum={nodeDatum} toggleNode={toggleNode} />
            </foreignObject>
        </g>
    );
};

const RoadmapTree = observer(() => {
    const [schema, setSchema] = useState(null)
    const navigator = useNavigate()

    useEffect(() => {
        if (direction.Schema) {
            fetchSchema(direction.Schema).then(sch => {
                setSchema(sch)
                // console.log(sch)
            })
        } else {
            navigator(PROFILE_PAGE)
        }
    }, [])

    const { width, height } = window.screen;
    const { direction } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div
            id="treeWrapper"
            style={{
                width: "100%",
                height: "100vh",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div className="tree-legend">
                <p className="legend-text">
                    <div className="legend-dot red-dot"></div>
                    Обязательно
                </p>
                <p className="legend-text">
                    <div className="legend-dot orange-dot"></div>
                    Желательно
                </p>
                <p className="legend-text">
                    <div className="legend-dot green-dot"></div>
                    Рекомендуем
                </p>
            </div>
            <div className="back-button-container">
                <Button
                    onClick={() => navigate(PROFILE_PAGE)}
                    className="back-button px-5 py-3 rounded-pill"
                >
                    Назад
                </Button>
            </div>
            {schema && (
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
            )}
        </div>
    );
});

export default RoadmapTree;
