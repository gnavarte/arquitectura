export const getEnvVariables = () => {
    return {
        BACKEND_URL: process.env.BACKEND_URL || 'http://localhost',
        BACKEND_PORT: process.env.BACKEND_PORT || 3000,
    };
}

