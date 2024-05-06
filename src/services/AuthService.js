import { getEnvVariables } from "../helpers";

const { BACKEND_URL, BACKEND_PORT } = getEnvVariables();
const authUrl = `${BACKEND_URL}:${BACKEND_PORT}/auth`;

export const authLogin = async (email, password) => {
    const response = await fetch(`${authUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return response;
};

export const authSignup = async (name, email, password) => {
    const response = await fetch(`${authUrl}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });
    return response;
};
