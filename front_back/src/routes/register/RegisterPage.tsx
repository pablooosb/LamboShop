import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"
import './RegisterPage.css'

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '', 
        password: '', 
        firstName: '', 
        lastName: '', 
        email: '', 
        birthDate: ''
    });
    
    const [error, setError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isOldEnough = (date: string): boolean => {
        const today = new Date();
        const birthDate = new Date(date);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 18;
    };

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (!isOldEnough(formData.birthDate)) {
            setError("Registration failed: You must be at least 18 years old.");
            return;
        }
        // Add the @lamboshop.com to make a fake email for Firebase
        const fakeEmail = `${formData.username}@lamboshop.com`;

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                fakeEmail, 
                formData.password
            );

            const user = userCredential.user;
            const token = await user.getIdToken();

            // Save token
            localStorage.setItem('userToken', token);
            
            // Save user so favorites works
            localStorage.setItem('user', JSON.stringify({
                uid: user.uid,
                email: user.email,
                username: formData.username
            }));
            
            alert("Account created successfully!");
            navigate('/home');

        } catch (err: any) {
            if (err.code === 'auth/email-already-in-use') {
                setError("This username is already taken.");
            } else if (err.code === 'auth/weak-password') {
                setError("Password should be at least 6 characters.");
            } else {
                setError("Error: " + err.message);
            }
        }
    };

    return (
        <div className="register-page">
            <div className="register-card">
                <h2>Create Account</h2>
                {error && <div className="error-banner" style={{ color: '#fc4747', marginBottom: '1rem' }}>{error}</div>}
                
                <form onSubmit={handleRegister}>
                    <div className="form-grid">
                        <input 
                            type="text" 
                            name="firstName" 
                            placeholder="First Name" 
                            onChange={handleChange} 
                            value={formData.firstName}
                            required 
                        />
                        <input 
                            type="text" 
                            name="lastName" 
                            placeholder="Last Name" 
                            onChange={handleChange} 
                            value={formData.lastName}
                            required 
                        />
                    </div>

                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        onChange={handleChange} 
                        value={formData.username}
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Personal Email Address" 
                        onChange={handleChange} 
                        value={formData.email}
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password (min. 6 characters)" 
                        onChange={handleChange} 
                        value={formData.password}
                        required 
                    />
                    
                    <div className="date-section">
                        <label>Date of Birth</label>
                        <input 
                            type="date" 
                            name="birthDate" 
                            onChange={handleChange} 
                            value={formData.birthDate}
                            required 
                        />
                    </div>

                    <button type="submit" className="btn-register">Register Now</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage