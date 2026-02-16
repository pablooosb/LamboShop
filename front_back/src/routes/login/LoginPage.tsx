import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react' 
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth"
import './LoginPage.css'

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

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        // Fake email so Firebase can work with username
        const fakeEmail = `${credentials.username}@lamboshop.com`;

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth, 
                fakeEmail, 
                credentials.password
            );
            
            const user = userCredential.user;
            const token = await user.getIdToken();
            
            localStorage.setItem('userToken', token);
            localStorage.setItem('user', JSON.stringify({
                uid: user.uid,
                email: user.email,
                username: credentials.username
            }));
            
            navigate('/home');
        } catch (err: any) {
            console.error("Error code:", err.code);
            if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
                setError('Username or password incorrect');
            } else {
                setError('Error with the service. Try again later');
            }
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Login</h2>
                <p className="subtitle">Please enter your details to sign in</p>
                {error && <p style={{ color: '#fc4747', marginBottom: '1rem', fontSize: '0.85rem' }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Enter your username" value={credentials.username} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
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