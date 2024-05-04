import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
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

    const { login, register, errorMessage } = useAuth();
    const { formState: loginValues, onInputChange: handleLoginChange } = useForm(loginFormFields);
    const { formState: registerValues, onInputChange: handleRegisterChange } = useForm(registerFormFields);

    const loginSubmit = (event) => {
        event.preventDefault();
        login(loginValues.loginEmail, loginValues.loginPassword);
    }

    const registerSubmit = (event) => {
        event.preventDefault();
        if (registerValues.registerPassword !== registerValues.registerPassword2) {
            console.error('Contraseñas no son iguales');
            return;
        }

        register(registerValues.registerName, registerValues.registerEmail, registerValues.registerPassword);
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
                    <input type="email" placeholder="Correo electrónico" value={loginValues.loginEmail} onChange={(event) => handleLoginChange(event, 'loginEmail')} required />
                    <input type="password" placeholder="Contraseña" value={loginValues.loginPassword} onChange={(event) => handleLoginChange(event, 'loginPassword')} required />
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
            <div className="register-form">
                <h3>¿Es tu primera vez? Regístrate</h3>
                <form onSubmit={registerSubmit}>
                    <input type="text" placeholder="Nombre" value={registerValues.registerName} onChange={(event) => handleRegisterChange(event, 'registerName')} required />
                    <input type="email" placeholder="Correo electrónico" value={registerValues.registerEmail} onChange={(event) => handleRegisterChange(event, 'registerEmail')} required />
                    <input type="password" placeholder="Contraseña" value={registerValues.registerPassword} onChange={(event) => handleRegisterChange(event, 'registerPassword')} required />
                    <input type="password" placeholder="Confirmar Contraseña" value={registerValues.registerPassword2} onChange={(event) => handleRegisterChange(event, 'registerPassword2')} required />
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
