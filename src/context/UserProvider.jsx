import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser, errorMessage, setErrorMessage }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
