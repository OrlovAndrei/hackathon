import React, { useState } from "react";
import Tree from "react-d3-tree";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const data = {
    name: "Frontend",
    children: [
        {
            name: "Интернет",
            attributes: {
                importance: "Обязательно",
                size: "big",
            },
            children: [
                {
                    name: "Хостинг",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Домен",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "DNS",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Принцип работы браузера",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "HTTP",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
            ],
        },
        {
            name: "HTML",
            attributes: {
                importance: "Обязательно",
                size: "big",
            },
            children: [
                {
                    name: "Семантические элементы",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Формы и валидация",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Доступность",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Основы SEO",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
            ],
        },
        {
            name: "CSS",
            attributes: {
                importance: "Обязательно",
                size: "big",
            },
            children: [
                {
                    name: "Layouts",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                    children: [
                        {
                            name: "Floats",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "Позиционирование",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "Отображение",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "Блочная модель",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "CSS Grid",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "Flexbox",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                    ],
                },
                {
                    name: "Отзывчивый дизайн",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Медиа-запросы",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Архитектура",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                    children: [
                        {
                            name: "BEM",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "OOCSS",
                            attributes: {
                                importance: "Необязательно",
                                size: "small",
                            },
                        },
                        {
                            name: "SMACSS",
                            attributes: {
                                importance: "Необязательно",
                                size: "small",
                            },
                        },
                    ],
                },
                {
                    name: "Препроцессоры",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                    children: [
                        {
                            name: "Sass",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "PostCSS",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "Less",
                            attributes: {
                                importance: "Необязательно",
                                size: "small",
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: "JavaScript",
            attributes: {
                importance: "Обязательно",
                size: "big",
            },
            children: [
                {
                    name: "Синтаксис и базовые конструкции",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Работа с DOM",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Fetch API / Ajax (XHR)",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "ES6+ и модульный подход",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Веб-компоненты",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Понимание концепций",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                    children: [
                        {
                            name: "Hoisting",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "Event Bubbling",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "Scope",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "Prototype",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "Shadow DOM",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "Строгий режим",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: "Веб-безопасность",
            attributes: {
                importance: "Обязательно",
                size: "big",
            },
            children: [
                {
                    name: "HTTPS",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "CORS",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "Политика защиты контента (CSP)",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "OWASP Security Risks",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
            ],
        },
        {
            name: "Инструменты",
            attributes: {
                importance: "Обязательно",
                size: "big",
            },
            children: [
                {
                    name: "VCS",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                    children: [
                        {
                            name: "Сервисы для хостинга проектов",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                            children: [
                                {
                                    name: "GitHub",
                                    attributes: {
                                        importance: "Желательно",
                                        size: "small",
                                    },
                                },
                                {
                                    name: "GitLab",
                                    attributes: {
                                        importance: "Необязательно",
                                        size: "small",
                                    },
                                },
                                {
                                    name: "Bitbucket",
                                    attributes: {
                                        importance: "Необязательно",
                                        size: "small",
                                    },
                                },
                            ],
                        },
                        {
                            name: "Git",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                    ],
                },
                {
                    name: "Линтеры и форматеры",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                    children: [
                        {
                            name: "Prettier",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "ESLint",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "StandardJS",
                            attributes: {
                                importance: "Необязательно",
                                size: "small",
                            },
                        },
                    ],
                },
                {
                    name: "Сборка",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                    children: [
                        {
                            name: "Таск-раннеры",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                            children: [
                                {
                                    name: "npm scripts",
                                    attributes: {
                                        importance: "Желательно",
                                        size: "small",
                                    },
                                },
                                {
                                    name: "Gulp",
                                    attributes: {
                                        importance: "Необязательно",
                                        size: "small",
                                    },
                                },
                            ],
                        },
                        {
                            name: "Бандлеры",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                            children: [
                                {
                                    name: "Webpack",
                                    attributes: {
                                        importance: "Желательно",
                                        size: "small",
                                    },
                                },
                                {
                                    name: "Rollup",
                                    attributes: {
                                        importance: "Желательно",
                                        size: "small",
                                    },
                                },
                                {
                                    name: "Parcel",
                                    attributes: {
                                        importance: "Желательно",
                                        size: "small",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Менеджеры пакетов",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                    children: [
                        {
                            name: "npm",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "yarn",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: "Фреймфорки",
            attributes: {
                importance: "Обязательно",
                size: "big",
            },
            children: [
                {
                    name: "React.js",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                    children: [
                        {
                            name: "Redux",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "MobX",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                    ],
                },
                {
                    name: "Angular",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                    children: [
                        {
                            name: "RxJS",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                        {
                            name: "NgRx",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                    ],
                },
                {
                    name: "Vue.js",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                    children: [
                        {
                            name: "VueX",
                            attributes: {
                                importance: "Желательно",
                                size: "small",
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: "GraphQL",
            attributes: {
                importance: "Обязательно",
                size: "big",
            },
            children: [
                {
                    name: "Apollo",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
                },
                {
                    name: "RelayModern",
                    attributes: {
                        importance: "Желательно",
                        size: "small",
                    },
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
