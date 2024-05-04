import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import { useAuth } from "../hooks/useAuth";

function AppRouter() {
    const { isLoggedIn } = useAuth();
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            {isLoggedIn && <Route path="/dashboard" element={<DashboardPage />} />}
        </Routes>
    );
}

export default AppRouter;