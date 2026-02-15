import React, { useState, useEffect } from 'react';
import bgVideo from "../../assets/lamboShopVideo.mp4"; 
import './LoginPage.css';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user_token');
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes ver en consola el usuario que intenta entrar
        console.log("Iniciando sesión con el usuario:", username);
        
        localStorage.setItem('user_token', 'fake-jwt-token');
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return (
        <div className="login-container">
            <video className="background-video" autoPlay loop muted>
            <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="login-content">
            <h1>Welcome back</h1>
            <p>You are already logged in. Redirecting to your garage...</p>
            </div>
        </div>
        );
    }

    return (
        <div className="login-container">
        <video className="background-video" autoPlay loop muted>
            <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="login-overlay">
            <div className="login-card">
            <h1>Member Login</h1>
            <p className="subtitle">Access your exclusive experience</p>

            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Username"
                />
                </div>

                <div className="input-group">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
                </div>

                <button type="submit" className="btn-login">
                Login
                </button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;