import { ADMIN, MAIN_PAGE } from "../util/consts";
import MainPage from "../pages/MainPage";
import Admin from "../pages/Admin";
import { Navigate } from "react-router-dom";

export const authRoutes = [{ path: ADMIN, component: <Admin />, exact: true }];

export const publicRoutes = [
    { path: MAIN_PAGE, component: <MainPage />, exact: true },
    { path: "*", component: <Navigate to={MAIN_PAGE} replace />, exact: true },
];
