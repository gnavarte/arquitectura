import { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
        </UserContext.Provider>
    );
    }

export default UserProvider;