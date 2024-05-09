import React, { useEffect, useState } from 'react';
import './DashboardPage.css';
import { fetchIotData, fetchMachineLearningData } from '../../services/iotService';

function DashboardPage() {
    const [iotData, setIotData] = useState({});
    const [machineLearningData, setMachineLearningData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const iotResponse = await fetchIotData();
            const iotData = await iotResponse.json();
            setIotData(JSON.parse(iotData.body));
            const machineLearningResponse = await fetchMachineLearningData();
            const machineLearningData = await machineLearningResponse.json();
            setMachineLearningData(machineLearningData);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="dashboard-container">
            <section className="dashboard-header">
                <div className="container">
                    <h1>Dashboard</h1>
                    <p>Bienvenido a tu panel de control personalizado. Aquí podrás ver información en tiempo real sobre tus cultivos, recibir alertas y tomar decisiones informadas para optimizar tu producción agrícola.</p>
                </div>
            </section>

            <section className="dashboard-content">
                <div className="container">
                    <button onClick={fetchData}>Actualizar datos</button>
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        <>
                            <h2>Información de sensores IoT</h2>
                            <div className="iot-data">
                                <p>Temperatura promedio: {iotData.average_temperature}°C</p>
                                <p>Lluvia promedio: {iotData.average_rainfall} mm/año</p>
                                <p>Pesticidas promedio: {iotData.average_pesticides} toneladas</p>
                            </div>

                            <h2>Predicción de producción agrícola</h2>
                            <div className="machine-learning-data">
                                <p>Producción estimada: {machineLearningData} Hg/Ha</p>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}

export default DashboardPage;
