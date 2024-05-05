import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useForm } from '../../hooks';
import './LoginPage.css';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
}

function LoginPage() {

    const navigate = useNavigate();
    const { login, register, errorMessage } = useAuth();
    const { loginEmail, loginPassword, onChange: handleLoginChange } = useForm(loginFormFields);
    const { registerName, registerEmail, registerPassword, registerPassword2, onChange: handleRegisterChange } = useForm(registerFormFields);

    const loginSubmit = async (event) => {
        event.preventDefault();
        await login(loginEmail, loginPassword);
        navigate('/dashboard');
    }

    const registerSubmit = (event) => {
        event.preventDefault();
        if (registerPassword !== registerPassword2) {
            console.error('Contraseñas no son iguales');
            return;
        }

        register(registerName, registerEmail, registerPassword);
    }

    useEffect(() => {
        if (errorMessage != null) {
            console.error('Error en la autenticación:', errorMessage);
        }
    }, [errorMessage])

    return (
        <div className="login-container">
            <div className="login-form">
                <h3>¡Nos alegra verte de nuevo!</h3>
                <form onSubmit={loginSubmit}>
                    <input type="email" placeholder="Correo electrónico" value={loginEmail} onChange={(event) => handleLoginChange(event.target.value, 'loginEmail')} required />
                    <input type="password" placeholder="Contraseña" value={loginPassword} onChange={(event) => handleLoginChange(event.target.value, 'loginPassword')} required />
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
            <div className="register-form">
                <h3>¿Es tu primera vez? Regístrate</h3>
                <form onSubmit={registerSubmit}>
                    <input type="text" placeholder="Nombre" value={registerName} onChange={(event) => handleRegisterChange(event.target.value, 'registerName')} required />
                    <input type="email" placeholder="Correo electrónico" value={registerEmail} onChange={(event) => handleRegisterChange(event.target.value, 'registerEmail')} required />
                    <input type="password" placeholder="Contraseña" value={registerPassword} onChange={(event) => handleRegisterChange(event.target.value, 'registerPassword')} required />
                    <input type="password" placeholder="Confirmar Contraseña" value={registerPassword2} onChange={(event) => handleRegisterChange(event.target.value, 'registerPassword2')} required />
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
