import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import './LoginPage.css';

const loginFormFields = {
    loginEmail:    '',
    loginPassword: '',
}

const registerFormFields = {
    registerName:      '',
    registerEmail:     '',
    registerPassword:  '',
    registerPassword2: '',
}

function LoginPage() {

    const { login, register, errorMessage } = useAuth();
    const { values: loginValues, handleChange: handleLoginChange } = useForm( loginFormFields );
    const { values: registerValues, handleChange: handleRegisterChange } = useForm( registerFormFields );

    const loginSubmit = ( event ) => {
        event.preventDefault();
        login(loginValues.loginEmail, loginValues.loginPassword);
    }

    const registerSubmit = ( event ) => {
        event.preventDefault();
        if ( registerValues.registerPassword !== registerValues.registerPassword2 ) {
            console.error('Contraseñas no son iguales');
            return;
        }

        register(registerValues.registerName, registerValues.registerEmail, registerValues.registerPassword);
    }

    useEffect(() => {
      if ( errorMessage !== undefined ) {
        console.error('Error en la autenticación:', errorMessage);
      }    
    }, [errorMessage])

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ loginSubmit }>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                value={ loginValues.loginEmail }
                                onChange={ handleLoginChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassword"
                                value={ loginValues.loginPassword }
                                onChange={ handleLoginChange }
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ registerSubmit }>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                value={ registerValues.registerName }
                                onChange={ handleRegisterChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                value={ registerValues.registerEmail }
                                onChange={ handleRegisterChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="registerPassword"
                                value={ registerValues.registerPassword }
                                onChange={ handleRegisterChange }
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="registerPassword2"
                                value={ registerValues.registerPassword2 }
                                onChange={ handleRegisterChange }
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;