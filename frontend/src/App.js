import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';  // Esta será la página de inicio que crearemos

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/register">Registro</Link>
                <Link to="/login">Inicio de Sesión</Link>
            </nav>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
