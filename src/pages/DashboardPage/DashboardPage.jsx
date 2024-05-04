import './DashboardPage.css';

function DashboardPage() {
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
                    <h2>Resumen de tus Cultivos</h2>
                    <p>Rendimiento: 10,000 kg</p>
                    <p>Temperatura: 25°C</p>
                    <p>Humedad: 70%</p>
                    <p>Cantidad de pesticidas utilizados: 5 kg</p>
                </div>
            </section>
        </div>
    );
}

export default DashboardPage;