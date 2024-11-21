import React, { useState } from 'react';
import api from './api';
import './Register.css'; // Archivo CSS para estilos personalizados

const Register = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        role: 'cliente',
        date_birth: '',
        sex: '',
        country: '',
        city: '',
        direction: '',
        phones: '',
        genres: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { ...form };
        if (formData.phones) {
            formData.phones = formData.phones.split(',').map((phone) => phone.trim());
        }
        if (formData.genres) {
            formData.genres = formData.genres.split(',').map((genre) => genre.trim());
        }

        try {
            const response = await api.post('/register', formData);
            setMessage(`Registro exitoso. Bienvenido, ${response.data.user.username}`);
        } catch (error) {
            if (error.response) {
                setMessage(`Error al registrarse: ${error.response.data.msg || 'Error desconocido'}`);
            } else {
                setMessage('Error desconocido');
            }
        }
    };

    return (
        <div className="register-container">
            <h2 className="form-title">Registro</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre de Usuario</label>
                    <input
                        name="username"
                        placeholder="Nombre de usuario"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Correo electrónico"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Tipo de Usuario</label>
                    <select name="role" onChange={handleChange}>
                        <option value="cliente">Cliente</option>
                        <option value="empresa">Empresa</option>
                    </select>
                </div>

                {form.role === 'cliente' && (
                    <>
                        <div className="form-group">
                            <label>Fecha de Nacimiento</label>
                            <input
                                name="date_birth"
                                type="date"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Sexo</label>
                            <select name="sex" onChange={handleChange}>
                                <option value="">Seleccione su sexo</option>
                                <option value="male">Masculino</option>
                                <option value="female">Femenino</option>
                                <option value="other">Otro</option>
                            </select>
                        </div>
                    </>
                )}

                {form.role === 'empresa' && (
                    <>
                        <div className="form-group">
                            <label>País</label>
                            <input
                                name="country"
                                placeholder="País"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Ciudad</label>
                            <input
                                name="city"
                                placeholder="Ciudad"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Dirección (Opcional)</label>
                            <input
                                name="direction"
                                placeholder="Dirección"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Teléfonos</label>
                            <input
                                name="phones"
                                placeholder="Teléfonos (separados por comas)"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Géneros</label>
                            <input
                                name="genres"
                                placeholder="Géneros (separados por comas)"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </>
                )}

                <button className="form-button" type="submit">Registrarse</button>
            </form>
            {message && <p className="form-message">{message}</p>}
        </div>
    );
};

export default Register;
