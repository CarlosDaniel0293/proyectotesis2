import React, { useState } from 'react';
import api, { setAuthToken } from './api';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importa los estilos

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', form);
            const { id_token } = response.data;

            localStorage.setItem('token', id_token);
            setAuthToken(id_token);

            const decoded = jwtDecode(id_token);
            setMessage(`Bienvenido, ${decoded.email} (${decoded.role})`);
            navigate('/home');
        } catch (error) {
            setMessage('Error al iniciar sesión: ' + error.response.data.msg);
        }
    };

    return (
        <div className="login-container">
            <h2 className="form-title">Inicio de Sesión</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Correo electrónico"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="form-button" type="submit">
                    Iniciar Sesión
                </button>
            </form>
            {message && <p className="form-message">{message}</p>}
        </div>
    );
};

export default Login;
