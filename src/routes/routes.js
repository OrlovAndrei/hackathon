import {ADMIN, AUTH_PAGE, MAIN_PAGE} from "../util/consts";
import MainPage from "../pages/MainPage";
import Admin from "../pages/Admin";
import { Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";
import TreePage from "../pages/TreePage";

export const authRoutes = [{ path: ADMIN, component: <Admin />, exact: true }];

export const publicRoutes = [
    { path: MAIN_PAGE, component: <MainPage />, exact: true },
    { path: AUTH_PAGE, component: <AuthPage />, exact: true },
    { path: PROFILE_PAGE, component: <ProfilePage />, exact: true },
    { path: TREE_PAGE, component: <TreePage />, exact: true },
    { path: "*", component: <Navigate to={MAIN_PAGE} replace />, exact: true },
];
