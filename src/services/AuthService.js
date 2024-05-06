export const authLogin = async (email, password) => {
    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
}

export const authSignup = async (name, email, password) => {
    const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    return data;
}