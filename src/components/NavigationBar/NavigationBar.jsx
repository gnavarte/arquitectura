import React, { useState } from 'react';
import './NavigationBar.css';
import plantaImg from '../../assets/icons/plant.png';

function NavigationBar() {
  const [activeTab, setActiveTab] = useState('Analítica');

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
          <li className={activeTab === 'Analítica' ? 'nav-item active' : 'nav-item'} onClick={() => handleTabClick('Analítica')}>
            Analítica
          </li>
          <li className={activeTab === 'Dispositivos' ? 'nav-item active' : 'nav-item'} onClick={() => handleTabClick('Dispositivos')}>
            Dispositivos
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
