import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import { useAuth } from '../hooks/useAuth';

function AppRouter() {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <NavigationBar />
            <Routes>
                {isLoggedIn ? (
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
