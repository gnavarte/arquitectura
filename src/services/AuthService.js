import { getEnvVariables } from "../helpers";

const { BACKEND_URL, BACKEND_PORT } = getEnvVariables();
const authUrl = `${BACKEND_URL}:${BACKEND_PORT}/auth`;

const fetchAuthData = async (url, method, data) => {
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response;
};

export const authLogin = async (email, password) => {
    return fetchAuthData(`${authUrl}/login`, 'POST', { email, password });
};

export const authSignup = async (name, email, password) => {
    return fetchAuthData(`${authUrl}/signup`, 'POST', { name, email, password });
};
