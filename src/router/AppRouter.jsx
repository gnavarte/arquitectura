import { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import UserContext from '../context/UserContext';

function AppRouter() {
    const { user } = useContext(UserContext);
    return (
        <>
            <NavigationBar />
            <Routes>
                {user ? (
                    <>
                        <Route path="/*" element={<Navigate to="/dashboard" />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/*" element={<Navigate to="/" />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/dashboard" element={<Navigate to="/login" />} />
                    </>
                )}
            </Routes>
        </>
    );
}

export default AppRouter;
