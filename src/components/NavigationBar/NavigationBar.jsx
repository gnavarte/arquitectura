import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './NavigationBar.css';
import plantaImg from '../../assets/icons/plant.png';
import { useAuth } from '../../hooks/useAuth';

function NavigationBar() {
  const { isLoggedIn } = useAuth();
  const [activeTab, setActiveTab] = useState('Analítica');

  const handleLogin = () => {
    return <Navigate to="/login" />;
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="navigation-container">
      <div className="title">
        <img src={plantaImg} alt="Planta" className="planta-icon" />
        AgroSmart Solutions
      </div>
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
            </>
          ) : (
            <li className="nav-item" onClick={() => handleLogin()}>
              Ingresar
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
