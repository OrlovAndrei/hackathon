import React, { useContext } from "react";
import { authRoutes, publicRoutes } from "../routes/routes";
import { Routes, Route } from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
    const { user } = useContext(Context);
    console.log(user.isAuth);
    return (
        <Routes>
            {publicRoutes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.component}
                />
            ))}
            {user.isAuth &&
                authRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                    />
                ))}
        </Routes>
    );
});

export default AppRouter;
