import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavigationBar.css';
import plantaImg from '../../assets/icons/plant.png';
import { useAuth } from '../../hooks/useAuth';

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('Analítica');
  const [itemText, setItemText] = useState('Ingresar');

  useEffect(() => {
    if (location.pathname === '/login') {
      setItemText('Regresar');
    } else if (location.pathname === '/dashboard') {
      setItemText('Salir');
    } else {
      setItemText('Ingresar');
    }
  }, [location.pathname]);

  const handleLogin = () => {
    if (location.pathname === '/') {
      navigate('/login');
    } else {
      navigate('/');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="navigation-container">
      <a href="/" className="title">
        <img src={plantaImg} alt="Planta" className="planta-icon" />
        AgroSmart Solutions
      </a>
      <nav>
        <ul className="nav-list">
          {isLoggedIn ? (
            <>
              <li className={activeTab === 'Analítica' ? 'nav-item active' : 'nav-item'} onClick={() => handleTabClick('Analítica')}>
                Analítica
              </li>
              <li className={activeTab === 'Dispositivos' ? 'nav-item active' : 'nav-item'} onClick={() => handleTabClick('Dispositivos')}>
                Dispositivos
              </li>
              <li className="nav-item" onClick={handleLogout}>
                {itemText}
              </li>
            </>
          ) : (
            <li className="nav-item" onClick={handleLogin}>
              {itemText}
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
