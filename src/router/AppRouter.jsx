import { Routes, Route } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import { useAuth } from "../hooks/useAuth";

function AppRouter() {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <LoginPage />} />
            </Routes>
        </>
    );
}

export default AppRouter;