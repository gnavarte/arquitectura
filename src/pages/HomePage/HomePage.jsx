import NavigationBar from "../../components/NavigationBar/NavigationBar";
import './HomePage.css';

function HomePage() {
    return (
        <div>
            <NavigationBar />
            <section className="hero">
                <div className="container">
                    <h1>¡Bienvenido a AgroSmart Solutions S.A.!</h1>
                    <p>Revolutionizing Argentine agriculture through IoT technologies to maximize efficiency, reduce costs, and increase agricultural production sustainably.</p>
                    <a href="#about" className="btn btn-primary">Acerca de Nosotros</a>
                </div>
            </section>

            <section id="about" className="about">
                <div className="container">
                    <h2>Acerca de Nosotros</h2>
                    <p>En AgroSmart Solutions, nos dedicamos a proporcionar soluciones tecnológicas innovadoras para la agricultura argentina. Nuestra misión es ayudar a los agricultores a tomar decisiones informadas y optimizar sus operaciones agrícolas.</p>
                    <p>Nuestros sistemas de monitoreo y gestión basados en IoT permiten a los agricultores controlar variables críticas como humedad, temperatura y condiciones del suelo en tiempo real, lo que les ayuda a reducir el uso de recursos, prevenir pérdidas y mejorar la productividad.</p>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2>Nuestra Propuesta de Valor</h2>
                    <div className="feature">
                        <h3>Optimización de Recursos</h3>
                        <p>Reducimos el uso de agua y fertilizantes mediante el monitoreo preciso de las condiciones del suelo.</p>
                    </div>
                    <div className="feature">
                        <h3>Prevención de Pérdidas</h3>
                        <p>Detectamos tempranamente condiciones adversas que podrían afectar los cultivos, previniendo así pérdidas.</p>
                    </div>
                    <div className="feature">
                        <h3>Mejora de la Productividad</h3>
                        <p>Utilizamos análisis predictivos para mejorar las prácticas de cultivo y aumentar los rendimientos.</p>
                    </div>
                    <div className="feature">
                        <h3>Accesibilidad de Datos</h3>
                        <p>Proporcionamos información en tiempo real accesible desde cualquier dispositivo conectado a internet, facilitando la toma de decisiones rápida y fundada.</p>
                    </div>
                </div>
            </section>

            <section className="use-cases">
                <div className="container">
                    <h2>Casos de Uso de Ejemplo</h2>
                    <div className="use-case">
                        <h3>Monitoreo de Silo-bolsas</h3>
                        <p>Implementamos microchips en silo-bolsas para monitorizar la humedad y temperatura, asegurando la calidad de los granos almacenados.</p>
                    </div>
                    <div className="use-case">
                        <h3>Detección de Enfermedades en Cultivos</h3>
                        <p>Utilizamos sensores para detectar signos tempranos de enfermedades o infestaciones, permitiendo intervenciones rápidas y localizadas.</p>
                    </div>
                    <div className="use-case">
                        <h3>Gestión del Riego</h3>
                        <p>Empleamos sensores de humedad del suelo que activan sistemas de riego solo cuando es necesario, optimizando el uso del agua.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
