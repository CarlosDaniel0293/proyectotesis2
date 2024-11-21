import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Bienvenido a Guitarra para Principiantes</h1>
                <p>Aprende a tocar guitarra desde cero con nuestros recursos y tutoriales.</p>
            </header>

            <section className="academies-section">
                <h2>Academias Registradas</h2>
                <div className="academies-list">
                    <div className="academy-card">
                        <img src="https://via.placeholder.com/150" alt="Academia A" />
                        <h3>Academia A</h3>
                        <p>Especializada en guitarristas principiantes. Ubicación: Lima, Perú.</p>
                    </div>
                    <div className="academy-card">
                        <img src="https://via.placeholder.com/150" alt="Academia B" />
                        <h3>Academia B</h3>
                        <p>Clases personalizadas para todas las edades. Ubicación: Bogotá, Colombia.</p>
                    </div>
                    <div className="academy-card">
                        <img src="https://via.placeholder.com/150" alt="Academia C" />
                        <h3>Academia C</h3>
                        <p>Programa intensivo para principiantes. Ubicación: Ciudad de México, México.</p>
                    </div>
                </div>
            </section>

            <section className="tutorials-section">
                <h2>Tutoriales Básicos de Guitarra</h2>
                <div className="tutorials-list">
                    <div className="tutorial-card">
                        <img src="https://via.placeholder.com/150" alt="Tutorial 1" />
                        <h3>Afinación Básica</h3>
                        <p>Aprende cómo afinar tu guitarra correctamente.</p>
                    </div>
                    <div className="tutorial-card">
                        <img src="https://via.placeholder.com/150" alt="Tutorial 2" />
                        <h3>Primeros Acordes</h3>
                        <p>Domina los acordes más usados para principiantes.</p>
                    </div>
                    <div className="tutorial-card">
                        <img src="https://via.placeholder.com/150" alt="Tutorial 3" />
                        <h3>Ritmos Básicos</h3>
                        <p>Comienza a tocar ritmos simples y populares.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
