import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react'; 
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ 
        username: '', 
        password: '' 
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({ 
            ...credentials, 
            [e.target.name]: e.target.value 
        });
    };

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (credentials.username === 'admin' && credentials.password === '1234') {
            localStorage.setItem('userToken', 'fake-token-123')
            navigate('/home');
        } else {
            setError('Invalid username or password (Try admin/1234)');
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Login</h2>
                <p className="subtitle">Please enter your details to sign in</p>
                
                {error && <p style={{ color: '#fc4747', marginBottom: '1rem' }}>{error}</p>}

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Enter your username" 
                            value={credentials.username}
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    
                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={credentials.password}
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <button type="submit" className="btn-login">Sign In</button>
                </form>

                <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
                    Don't have an account? <Link to="/register" style={{ color: '#917300', textDecoration: 'none' }}>Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;