import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { Context } from "..";
import TreeItem from "./TreeItem";

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
                <TreeItem nodeDatum={nodeDatum} toggleNode={toggleNode} />
            </foreignObject>
        </g>
    );
};

const RoadmapTree = observer(() => {
    const { width, height } = window.screen;
    const { direction } = useContext(Context);
    const schema = require("../assets/trees/" + direction.Schema);
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
});

export default RoadmapTree;
