import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import userStore from "./store/userStore";
import directionStore from "./store/directionStore";
import "./index.css";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context.Provider
        value={{ user: new userStore(), direction: new directionStore() }}
    >
        <App />
    </Context.Provider>
);
